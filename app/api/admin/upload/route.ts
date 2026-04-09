import { NextRequest, NextResponse } from "next/server";
import {
  getSupabaseServiceClient,
  hasServiceSupabaseConfig,
} from "../../../lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DEFAULT_BUCKET = "portfolio-assets";

const isAuthorized = (request: NextRequest) => {
  const password = process.env.ADMIN_PANEL_PASSWORD;
  if (!password) {
    return true;
  }

  return request.headers.get("x-admin-password") === password;
};

const normalizeFileName = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!hasServiceSupabaseConfig) {
    return NextResponse.json(
      { error: "Supabase service credentials are not configured." },
      { status: 400 },
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const bucket = String(formData.get("bucket") || DEFAULT_BUCKET);
  const folder = String(formData.get("folder") || "uploads");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file upload." }, { status: 400 });
  }

  const fileBuffer = await file.arrayBuffer();
  const fileName = normalizeFileName(file.name || "asset.bin");
  const filePath = `${folder}/${Date.now()}-${fileName}`;
  const supabase = getSupabaseServiceClient();

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(filePath, fileBuffer, {
      contentType: file.type || "application/octet-stream",
      upsert: false,
    });

  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 });
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);

  return NextResponse.json({
    bucket,
    path: filePath,
    url: data.publicUrl,
  });
}
