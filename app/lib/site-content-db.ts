import { defaultSiteContent } from "./default-site-content";
import {
  BlogItem,
  DesignItem,
  SiteContent,
  SiteSettings,
  SongItem,
  WorkItem,
} from "./site-content";
import {
  getSupabasePublicClient,
  getSupabaseServiceClient,
  hasPublicSupabaseConfig,
  hasServiceSupabaseConfig,
} from "./supabase-server";

const SETTINGS_ROW_ID = 1;

type DbSettingsRow = {
  id: number;
  profile_name: string;
  profile_image_url: string;
  resume_url: string;
  email: string;
  behance_url: string;
  linkedin_url: string;
  hero_primary_text: string;
  hero_secondary_text: string;
  contact_title: string;
  contact_intro_text: string;
};

type DbSongRow = {
  id: number;
  image_url: string;
  sort_order: number;
  is_active: boolean;
};

type DbDesignRow = {
  id: number;
  name: string;
  image_url: string;
  url: string;
  sort_order: number;
  is_active: boolean;
};

type DbWorkRow = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  figma_url: string;
  demo_url: string;
  image_url: string;
  available: boolean;
  sort_order: number;
  is_active: boolean;
};

type DbBlogRow = {
  id: number;
  title: string;
  image_url: string;
  date_label: string;
  url: string;
  available: boolean;
  sort_order: number;
  is_active: boolean;
};

type SyncTableName = "songs" | "designs" | "works" | "blogs";

const toSettings = (row: Partial<DbSettingsRow> | null): SiteSettings => ({
  id: SETTINGS_ROW_ID,
  profileName: row?.profile_name ?? defaultSiteContent.settings.profileName,
  profileImageUrl:
    row?.profile_image_url ?? defaultSiteContent.settings.profileImageUrl,
  resumeUrl: row?.resume_url ?? defaultSiteContent.settings.resumeUrl,
  email: row?.email ?? defaultSiteContent.settings.email,
  behanceUrl: row?.behance_url ?? defaultSiteContent.settings.behanceUrl,
  linkedinUrl: row?.linkedin_url ?? defaultSiteContent.settings.linkedinUrl,
  heroPrimaryText:
    row?.hero_primary_text ?? defaultSiteContent.settings.heroPrimaryText,
  heroSecondaryText:
    row?.hero_secondary_text ?? defaultSiteContent.settings.heroSecondaryText,
  contactTitle: row?.contact_title ?? defaultSiteContent.settings.contactTitle,
  contactIntroText:
    row?.contact_intro_text ?? defaultSiteContent.settings.contactIntroText,
});

const toSong = (row: DbSongRow): SongItem => ({
  id: row.id,
  imageUrl: row.image_url,
  sortOrder: row.sort_order,
  isActive: row.is_active,
});

const toDesign = (row: DbDesignRow): DesignItem => ({
  id: row.id,
  name: row.name,
  imageUrl: row.image_url,
  url: row.url,
  sortOrder: row.sort_order,
  isActive: row.is_active,
});

const toWork = (row: DbWorkRow): WorkItem => ({
  id: row.id,
  name: row.name,
  description: row.description,
  technologies: Array.isArray(row.technologies) ? row.technologies : [],
  figmaUrl: row.figma_url,
  demoUrl: row.demo_url,
  imageUrl: row.image_url,
  available: row.available,
  sortOrder: row.sort_order,
  isActive: row.is_active,
});

const toBlog = (row: DbBlogRow): BlogItem => ({
  id: row.id,
  title: row.title,
  imageUrl: row.image_url,
  dateLabel: row.date_label,
  url: row.url,
  available: row.available,
  sortOrder: row.sort_order,
  isActive: row.is_active,
});

const normalizeId = (id: unknown) => {
  const value = typeof id === "number" ? id : Number(id);
  return Number.isFinite(value) && value > 0 ? value : undefined;
};

const normalizeTechnologies = (technologies: string[]) =>
  technologies.map((technology) => technology.trim()).filter(Boolean);

const mapSettingsToDb = (settings: SiteSettings): DbSettingsRow => ({
  id: SETTINGS_ROW_ID,
  profile_name: settings.profileName,
  profile_image_url: settings.profileImageUrl,
  resume_url: settings.resumeUrl,
  email: settings.email,
  behance_url: settings.behanceUrl,
  linkedin_url: settings.linkedinUrl,
  hero_primary_text: settings.heroPrimaryText,
  hero_secondary_text: settings.heroSecondaryText,
  contact_title: settings.contactTitle,
  contact_intro_text: settings.contactIntroText,
});

const mapSongToDb = (song: SongItem) => {
  const id = normalizeId(song.id);
  return {
    ...(id !== undefined ? { id } : {}),
    image_url: song.imageUrl,
    sort_order: song.sortOrder,
    is_active: song.isActive,
  };
};

const mapDesignToDb = (design: DesignItem) => {
  const id = normalizeId(design.id);
  return {
    ...(id !== undefined ? { id } : {}),
    name: design.name,
    image_url: design.imageUrl,
    url: design.url,
    sort_order: design.sortOrder,
    is_active: design.isActive,
  };
};

const mapWorkToDb = (work: WorkItem) => {
  const id = normalizeId(work.id);
  return {
    ...(id !== undefined ? { id } : {}),
    name: work.name,
    description: work.description,
    technologies: normalizeTechnologies(work.technologies),
    figma_url: work.figmaUrl,
    demo_url: work.demoUrl,
    image_url: work.imageUrl,
    available: work.available,
    sort_order: work.sortOrder,
    is_active: work.isActive,
  };
};

const mapBlogToDb = (blog: BlogItem) => {
  const id = normalizeId(blog.id);
  return {
    ...(id !== undefined ? { id } : {}),
    title: blog.title,
    image_url: blog.imageUrl,
    date_label: blog.dateLabel,
    url: blog.url,
    available: blog.available,
    sort_order: blog.sortOrder,
    is_active: blog.isActive,
  };
};

const sortByOrder = <T extends { sortOrder: number }>(items: T[]) =>
  [...items].sort((a, b) => a.sortOrder - b.sortOrder);

const syncTableRows = async <T>(
  table: SyncTableName,
  rows: T[],
  mapper: (row: T) => Record<string, unknown>,
) => {
  const supabase = getSupabaseServiceClient();
  const mappedRows = rows.map(mapper);
  const rowsWithId: Record<string, unknown>[] = [];
  const rowsWithoutId: Record<string, unknown>[] = [];

  for (const row of mappedRows) {
    const normalizedId = normalizeId((row as { id?: unknown }).id);
    if (normalizedId !== undefined) {
      rowsWithId.push({ ...row, id: normalizedId });
      continue;
    }

    const { id: _id, ...rowWithoutId } = row as { id?: unknown } & Record<string, unknown>;
    rowsWithoutId.push(rowWithoutId);
  }

  const keepIds: number[] = [];

  if (rowsWithId.length > 0) {
    const { data, error } = await supabase
      .from(table)
      .upsert(rowsWithId, { onConflict: "id" })
      .select("id");

    if (error) {
      throw error;
    }

    keepIds.push(
      ...(data ?? [])
        .map((row) => Number((row as { id: number }).id))
        .filter((id) => Number.isFinite(id)),
    );
  }

  if (rowsWithoutId.length > 0) {
    const { data, error } = await supabase.from(table).insert(rowsWithoutId).select("id");

    if (error) {
      throw error;
    }

    keepIds.push(
      ...(data ?? [])
        .map((row) => Number((row as { id: number }).id))
        .filter((id) => Number.isFinite(id)),
    );
  }

  const uniqueKeepIds = Array.from(new Set(keepIds));

  if (uniqueKeepIds.length === 0) {
    const { error: deleteError } = await supabase.from(table).delete().gt("id", 0);
    if (deleteError) {
      throw deleteError;
    }
    return;
  }

  const { error: deleteError } = await supabase
    .from(table)
    .delete()
    .not("id", "in", `(${uniqueKeepIds.join(",")})`);

  if (deleteError) {
    throw deleteError;
  }
};

export const fetchPublicSiteContent = async (): Promise<SiteContent> => {
  if (!hasPublicSupabaseConfig) {
    return defaultSiteContent;
  }

  try {
    const supabase = getSupabasePublicClient();

    const [settingsResult, songsResult, designsResult, worksResult, blogsResult] =
      await Promise.all([
        supabase.from("site_settings").select("*").eq("id", SETTINGS_ROW_ID).maybeSingle(),
        supabase.from("songs").select("*").eq("is_active", true).order("sort_order"),
        supabase.from("designs").select("*").eq("is_active", true).order("sort_order"),
        supabase.from("works").select("*").eq("is_active", true).order("sort_order"),
        supabase.from("blogs").select("*").eq("is_active", true).order("sort_order"),
      ]);

    if (
      settingsResult.error ||
      songsResult.error ||
      designsResult.error ||
      worksResult.error ||
      blogsResult.error
    ) {
      throw (
        settingsResult.error ||
        songsResult.error ||
        designsResult.error ||
        worksResult.error ||
        blogsResult.error
      );
    }

    return {
      settings: toSettings(settingsResult.data as DbSettingsRow | null),
      songs: (songsResult.data as DbSongRow[]).map(toSong),
      designs: (designsResult.data as DbDesignRow[]).map(toDesign),
      works: (worksResult.data as DbWorkRow[]).map(toWork),
      blogs: (blogsResult.data as DbBlogRow[]).map(toBlog),
    };
  } catch (error) {
    console.error("Unable to fetch Supabase content, using defaults.", error);
    return defaultSiteContent;
  }
};

export const fetchAdminSiteContent = async (): Promise<SiteContent> => {
  if (!hasServiceSupabaseConfig) {
    return defaultSiteContent;
  }

  const supabase = getSupabaseServiceClient();
  const [settingsResult, songsResult, designsResult, worksResult, blogsResult] =
    await Promise.all([
      supabase.from("site_settings").select("*").eq("id", SETTINGS_ROW_ID).maybeSingle(),
      supabase.from("songs").select("*").order("sort_order"),
      supabase.from("designs").select("*").order("sort_order"),
      supabase.from("works").select("*").order("sort_order"),
      supabase.from("blogs").select("*").order("sort_order"),
    ]);

  if (
    settingsResult.error ||
    songsResult.error ||
    designsResult.error ||
    worksResult.error ||
    blogsResult.error
  ) {
    throw (
      settingsResult.error ||
      songsResult.error ||
      designsResult.error ||
      worksResult.error ||
      blogsResult.error
    );
  }

  return {
    settings: toSettings(settingsResult.data as DbSettingsRow | null),
    songs: (songsResult.data as DbSongRow[]).map(toSong),
    designs: (designsResult.data as DbDesignRow[]).map(toDesign),
    works: (worksResult.data as DbWorkRow[]).map(toWork),
    blogs: (blogsResult.data as DbBlogRow[]).map(toBlog),
  };
};

export const saveAdminSiteContent = async (content: SiteContent) => {
  if (!hasServiceSupabaseConfig) {
    throw new Error("Supabase service role is not configured.");
  }

  const supabase = getSupabaseServiceClient();
  const settings = mapSettingsToDb(content.settings);

  const { error: settingsError } = await supabase
    .from("site_settings")
    .upsert(settings, { onConflict: "id" });

  if (settingsError) {
    throw settingsError;
  }

  await syncTableRows("songs", sortByOrder(content.songs), mapSongToDb);
  await syncTableRows("designs", sortByOrder(content.designs), mapDesignToDb);
  await syncTableRows("works", sortByOrder(content.works), mapWorkToDb);
  await syncTableRows("blogs", sortByOrder(content.blogs), mapBlogToDb);
};
