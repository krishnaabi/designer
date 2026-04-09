"use client";

import { ChangeEvent, useState } from "react";
import { defaultSiteContent } from "../lib/default-site-content";
import { BlogItem, DesignItem, SiteContent, SongItem, WorkItem } from "../lib/site-content";

const createTempId = () => -Date.now() - Math.floor(Math.random() * 1000);

type UploadTarget = "profile" | "resume" | "songs" | "designs" | "works" | "blogs";

const AdminPage = () => {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [adminPassword, setAdminPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const getAuthHeaders = (): Record<string, string> => {
    const headers: Record<string, string> = {};
    if (adminPassword.trim()) {
      headers["x-admin-password"] = adminPassword.trim();
    }
    return headers;
  };

  const showMessage = (value: string) => {
    setMessage(value);
    setTimeout(() => {
      setMessage("");
    }, 4000);
  };

  const loadContent = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/content", {
        method: "GET",
        headers: getAuthHeaders(),
      });

      if (!response.ok) {
        showMessage("Unable to load admin content. Check password/environment.");
        return;
      }

      const data = (await response.json()) as SiteContent;
      setContent(data);
      showMessage("Admin content loaded.");
    } catch (error) {
      console.error(error);
      showMessage("Network error while loading admin content.");
    } finally {
      setLoading(false);
    }
  };

  const saveContent = async () => {
    setSaving(true);
    try {
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          ...getAuthHeaders(),
        },
        body: JSON.stringify(content),
      });

      if (!response.ok) {
        showMessage("Unable to save admin content.");
        return;
      }

      showMessage("All changes saved.");
    } catch (error) {
      console.error(error);
      showMessage("Network error while saving admin content.");
    } finally {
      setSaving(false);
    }
  };

  const uploadFile = async (file: File, target: UploadTarget) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", target);
    formData.append("bucket", "portfolio-assets");

    const response = await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    return (await response.json()) as { url: string };
  };

  const handleSettingsUpload = async (
    event: ChangeEvent<HTMLInputElement>,
    target: UploadTarget,
    field: "profileImageUrl" | "resumeUrl",
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const uploaded = await uploadFile(file, target);
      setContent((prev) => ({
        ...prev,
        settings: {
          ...prev.settings,
          [field]: uploaded.url,
        },
      }));
      showMessage(`${field === "resumeUrl" ? "Resume" : "Profile image"} uploaded.`);
    } catch (error) {
      console.error(error);
      showMessage("Upload failed.");
    } finally {
      event.target.value = "";
    }
  };

  const handleSongImageUpload = async (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const uploaded = await uploadFile(file, "songs");
      setContent((prev) => {
        const songs = [...prev.songs];
        songs[index] = { ...songs[index], imageUrl: uploaded.url };
        return { ...prev, songs };
      });
      showMessage("Song image uploaded.");
    } catch (error) {
      console.error(error);
      showMessage("Upload failed.");
    } finally {
      event.target.value = "";
    }
  };

  const handleDesignImageUpload = async (
    event: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const uploaded = await uploadFile(file, "designs");
      setContent((prev) => {
        const designs = [...prev.designs];
        designs[index] = { ...designs[index], imageUrl: uploaded.url };
        return { ...prev, designs };
      });
      showMessage("Design image uploaded.");
    } catch (error) {
      console.error(error);
      showMessage("Upload failed.");
    } finally {
      event.target.value = "";
    }
  };

  const handleWorkImageUpload = async (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const uploaded = await uploadFile(file, "works");
      setContent((prev) => {
        const works = [...prev.works];
        works[index] = { ...works[index], imageUrl: uploaded.url };
        return { ...prev, works };
      });
      showMessage("Work image uploaded.");
    } catch (error) {
      console.error(error);
      showMessage("Upload failed.");
    } finally {
      event.target.value = "";
    }
  };

  const handleBlogImageUpload = async (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const uploaded = await uploadFile(file, "blogs");
      setContent((prev) => {
        const blogs = [...prev.blogs];
        blogs[index] = { ...blogs[index], imageUrl: uploaded.url };
        return { ...prev, blogs };
      });
      showMessage("Blog image uploaded.");
    } catch (error) {
      console.error(error);
      showMessage("Upload failed.");
    } finally {
      event.target.value = "";
    }
  };

  const addSong = () => {
    setContent((prev) => ({
      ...prev,
      songs: [
        ...prev.songs,
        {
          id: createTempId(),
          imageUrl: "",
          sortOrder: prev.songs.length,
          isActive: true,
        },
      ],
    }));
  };

  const addDesign = () => {
    setContent((prev) => ({
      ...prev,
      designs: [
        ...prev.designs,
        {
          id: createTempId(),
          name: "New Design",
          imageUrl: "",
          url: "",
          sortOrder: prev.designs.length,
          isActive: true,
        },
      ],
    }));
  };

  const addWork = () => {
    setContent((prev) => ({
      ...prev,
      works: [
        ...prev.works,
        {
          id: createTempId(),
          name: "New Work Item",
          description: "",
          technologies: [],
          figmaUrl: "",
          demoUrl: "",
          imageUrl: "",
          available: true,
          sortOrder: prev.works.length,
          isActive: true,
        },
      ],
    }));
  };

  const addBlog = () => {
    setContent((prev) => ({
      ...prev,
      blogs: [
        ...prev.blogs,
        {
          id: createTempId(),
          title: "New Blog",
          imageUrl: "",
          dateLabel: "",
          url: "",
          available: true,
          sortOrder: prev.blogs.length,
          isActive: true,
        },
      ],
    }));
  };

  const updateSong = (index: number, update: Partial<SongItem>) => {
    setContent((prev) => {
      const songs = [...prev.songs];
      songs[index] = { ...songs[index], ...update };
      return { ...prev, songs };
    });
  };

  const updateDesign = (index: number, update: Partial<DesignItem>) => {
    setContent((prev) => {
      const designs = [...prev.designs];
      designs[index] = { ...designs[index], ...update };
      return { ...prev, designs };
    });
  };

  const updateWork = (index: number, update: Partial<WorkItem>) => {
    setContent((prev) => {
      const works = [...prev.works];
      works[index] = { ...works[index], ...update };
      return { ...prev, works };
    });
  };

  const updateBlog = (index: number, update: Partial<BlogItem>) => {
    setContent((prev) => {
      const blogs = [...prev.blogs];
      blogs[index] = { ...blogs[index], ...update };
      return { ...prev, blogs };
    });
  };

  const removeSong = (index: number) => {
    setContent((prev) => ({ ...prev, songs: prev.songs.filter((_, i) => i !== index) }));
  };

  const removeDesign = (index: number) => {
    setContent((prev) => ({
      ...prev,
      designs: prev.designs.filter((_, i) => i !== index),
    }));
  };

  const removeWork = (index: number) => {
    setContent((prev) => ({ ...prev, works: prev.works.filter((_, i) => i !== index) }));
  };

  const removeBlog = (index: number) => {
    setContent((prev) => ({ ...prev, blogs: prev.blogs.filter((_, i) => i !== index) }));
  };

  return (
    <main className="min-h-screen bg-[#0E1016] px-6 py-8 text-[#e4ded7] md:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <p className="text-sm text-[#e4ded7]/70">
            Manage profile image, resume, SongCarousel, DesignsGrid, Work, Blog, and Contact.
          </p>
        </header>

        <section className="rounded-lg border border-[#2b2f39] bg-[#151922] p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end">
            <label className="flex w-full flex-col gap-1 text-sm md:max-w-[320px]">
              Admin Password (if enabled)
              <input
                type="password"
                value={adminPassword}
                onChange={(event) => setAdminPassword(event.target.value)}
                className="rounded border border-[#3a3f4d] bg-[#0E1016] px-3 py-2 outline-none"
              />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => void loadContent()}
                disabled={loading}
                className="rounded bg-white px-4 py-2 text-black disabled:opacity-60"
              >
                {loading ? "Loading..." : "Load From Supabase"}
              </button>
              <button
                type="button"
                onClick={() => void saveContent()}
                disabled={saving}
                className="rounded bg-[#3f8cff] px-4 py-2 text-white disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save All Changes"}
              </button>
            </div>
          </div>
          {message && <p className="mt-3 text-sm text-[#9fd3ff]">{message}</p>}
        </section>

        <section className="rounded-lg border border-[#2b2f39] bg-[#151922] p-4">
          <h2 className="mb-4 text-xl font-semibold">Settings</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <label className="flex flex-col gap-1 text-sm">
              Profile Name
              <input
                value={content.settings.profileName}
                onChange={(event) =>
                  setContent((prev) => ({
                    ...prev,
                    settings: { ...prev.settings, profileName: event.target.value },
                  }))
                }
                className="rounded border border-[#3a3f4d] bg-[#0E1016] px-3 py-2 outline-none"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm">
              Email
              <input
                value={content.settings.email}
                onChange={(event) =>
                  setContent((prev) => ({
                    ...prev,
                    settings: { ...prev.settings, email: event.target.value },
                  }))
                }
                className="rounded border border-[#3a3f4d] bg-[#0E1016] px-3 py-2 outline-none"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm">
              Behance URL
              <input
                value={content.settings.behanceUrl}
                onChange={(event) =>
                  setContent((prev) => ({
                    ...prev,
                    settings: { ...prev.settings, behanceUrl: event.target.value },
                  }))
                }
                className="rounded border border-[#3a3f4d] bg-[#0E1016] px-3 py-2 outline-none"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm">
              LinkedIn URL
              <input
                value={content.settings.linkedinUrl}
                onChange={(event) =>
                  setContent((prev) => ({
                    ...prev,
                    settings: { ...prev.settings, linkedinUrl: event.target.value },
                  }))
                }
                className="rounded border border-[#3a3f4d] bg-[#0E1016] px-3 py-2 outline-none"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm md:col-span-2">
              Hero Primary Text
              <textarea
                rows={2}
                value={content.settings.heroPrimaryText}
                onChange={(event) =>
                  setContent((prev) => ({
                    ...prev,
                    settings: { ...prev.settings, heroPrimaryText: event.target.value },
                  }))
                }
                className="rounded border border-[#3a3f4d] bg-[#0E1016] px-3 py-2 outline-none"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm md:col-span-2">
              Hero Secondary Text
              <textarea
                rows={2}
                value={content.settings.heroSecondaryText}
                onChange={(event) =>
                  setContent((prev) => ({
                    ...prev,
                    settings: { ...prev.settings, heroSecondaryText: event.target.value },
                  }))
                }
                className="rounded border border-[#3a3f4d] bg-[#0E1016] px-3 py-2 outline-none"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm">
              Contact Title
              <input
                value={content.settings.contactTitle}
                onChange={(event) =>
                  setContent((prev) => ({
                    ...prev,
                    settings: { ...prev.settings, contactTitle: event.target.value },
                  }))
                }
                className="rounded border border-[#3a3f4d] bg-[#0E1016] px-3 py-2 outline-none"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm">
              Contact Intro Text
              <input
                value={content.settings.contactIntroText}
                onChange={(event) =>
                  setContent((prev) => ({
                    ...prev,
                    settings: { ...prev.settings, contactIntroText: event.target.value },
                  }))
                }
                className="rounded border border-[#3a3f4d] bg-[#0E1016] px-3 py-2 outline-none"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm md:col-span-2">
              Profile Image URL
              <input
                value={content.settings.profileImageUrl}
                onChange={(event) =>
                  setContent((prev) => ({
                    ...prev,
                    settings: { ...prev.settings, profileImageUrl: event.target.value },
                  }))
                }
                className="rounded border border-[#3a3f4d] bg-[#0E1016] px-3 py-2 outline-none"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(event) => void handleSettingsUpload(event, "profile", "profileImageUrl")}
                className="text-sm"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm md:col-span-2">
              Resume URL
              <input
                value={content.settings.resumeUrl}
                onChange={(event) =>
                  setContent((prev) => ({
                    ...prev,
                    settings: { ...prev.settings, resumeUrl: event.target.value },
                  }))
                }
                className="rounded border border-[#3a3f4d] bg-[#0E1016] px-3 py-2 outline-none"
              />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(event) => void handleSettingsUpload(event, "resume", "resumeUrl")}
                className="text-sm"
              />
            </label>
          </div>
        </section>

        <section className="rounded-lg border border-[#2b2f39] bg-[#151922] p-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">SongCarousel</h2>
            <button type="button" onClick={addSong} className="rounded bg-white px-3 py-1 text-black">
              Add Song
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {content.songs.map((song, index) => (
              <div key={song.id} className="grid gap-2 rounded border border-[#2f3544] p-3 md:grid-cols-5">
                <input
                  value={song.imageUrl}
                  onChange={(event) => updateSong(index, { imageUrl: event.target.value })}
                  placeholder="Image URL"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1"
                />
                <input
                  type="number"
                  value={song.sortOrder}
                  onChange={(event) =>
                    updateSong(index, { sortOrder: Number(event.target.value || 0) })
                  }
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1"
                />
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={song.isActive}
                    onChange={(event) => updateSong(index, { isActive: event.target.checked })}
                  />
                  Active
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => void handleSongImageUpload(event, index)}
                  className="text-sm"
                />
                <button
                  type="button"
                  onClick={() => removeSong(index)}
                  className="rounded bg-[#ff4d4d] px-2 py-1 text-white"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-[#2b2f39] bg-[#151922] p-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">DesignsGrid</h2>
            <button type="button" onClick={addDesign} className="rounded bg-white px-3 py-1 text-black">
              Add Design
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {content.designs.map((design, index) => (
              <div
                key={design.id}
                className="grid gap-2 rounded border border-[#2f3544] p-3 md:grid-cols-6"
              >
                <input
                  value={design.name}
                  onChange={(event) => updateDesign(index, { name: event.target.value })}
                  placeholder="Name"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1"
                />
                <input
                  value={design.url}
                  onChange={(event) => updateDesign(index, { url: event.target.value })}
                  placeholder="Link URL"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1"
                />
                <input
                  value={design.imageUrl}
                  onChange={(event) => updateDesign(index, { imageUrl: event.target.value })}
                  placeholder="Image URL"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1"
                />
                <input
                  type="number"
                  value={design.sortOrder}
                  onChange={(event) =>
                    updateDesign(index, { sortOrder: Number(event.target.value || 0) })
                  }
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1"
                />
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={design.isActive}
                    onChange={(event) => updateDesign(index, { isActive: event.target.checked })}
                  />
                  Active
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => void handleDesignImageUpload(event, index)}
                    className="max-w-[170px] text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => removeDesign(index)}
                    className="rounded bg-[#ff4d4d] px-2 py-1 text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-[#2b2f39] bg-[#151922] p-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Work</h2>
            <button type="button" onClick={addWork} className="rounded bg-white px-3 py-1 text-black">
              Add Work Item
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {content.works.map((work, index) => (
              <div key={work.id} className="grid gap-2 rounded border border-[#2f3544] p-3 md:grid-cols-2">
                <input
                  value={work.name}
                  onChange={(event) => updateWork(index, { name: event.target.value })}
                  placeholder="Name"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1"
                />
                <input
                  type="number"
                  value={work.sortOrder}
                  onChange={(event) => updateWork(index, { sortOrder: Number(event.target.value || 0) })}
                  placeholder="Sort Order"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1"
                />
                <textarea
                  rows={2}
                  value={work.description}
                  onChange={(event) => updateWork(index, { description: event.target.value })}
                  placeholder="Description"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1 md:col-span-2"
                />
                <input
                  value={work.technologies.join(", ")}
                  onChange={(event) =>
                    updateWork(index, {
                      technologies: event.target.value
                        .split(",")
                        .map((value) => value.trim())
                        .filter(Boolean),
                    })
                  }
                  placeholder="Technologies (comma separated)"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1 md:col-span-2"
                />
                <input
                  value={work.figmaUrl}
                  onChange={(event) => updateWork(index, { figmaUrl: event.target.value })}
                  placeholder="Figma URL"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1"
                />
                <input
                  value={work.demoUrl}
                  onChange={(event) => updateWork(index, { demoUrl: event.target.value })}
                  placeholder="Demo URL"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1"
                />
                <input
                  value={work.imageUrl}
                  onChange={(event) => updateWork(index, { imageUrl: event.target.value })}
                  placeholder="Image URL"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1 md:col-span-2"
                />
                <div className="flex items-center gap-4 text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={work.available}
                      onChange={(event) => updateWork(index, { available: event.target.checked })}
                    />
                    Available
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={work.isActive}
                      onChange={(event) => updateWork(index, { isActive: event.target.checked })}
                    />
                    Active
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => void handleWorkImageUpload(event, index)}
                    className="max-w-[180px] text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => removeWork(index)}
                    className="rounded bg-[#ff4d4d] px-2 py-1 text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-[#2b2f39] bg-[#151922] p-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Blog</h2>
            <button type="button" onClick={addBlog} className="rounded bg-white px-3 py-1 text-black">
              Add Blog
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {content.blogs.map((blog, index) => (
              <div key={blog.id} className="grid gap-2 rounded border border-[#2f3544] p-3 md:grid-cols-2">
                <input
                  value={blog.title}
                  onChange={(event) => updateBlog(index, { title: event.target.value })}
                  placeholder="Title"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1 md:col-span-2"
                />
                <input
                  value={blog.url}
                  onChange={(event) => updateBlog(index, { url: event.target.value })}
                  placeholder="URL"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1"
                />
                <input
                  value={blog.dateLabel}
                  onChange={(event) => updateBlog(index, { dateLabel: event.target.value })}
                  placeholder="Date label"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1"
                />
                <input
                  value={blog.imageUrl}
                  onChange={(event) => updateBlog(index, { imageUrl: event.target.value })}
                  placeholder="Image URL"
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1 md:col-span-2"
                />
                <input
                  type="number"
                  value={blog.sortOrder}
                  onChange={(event) => updateBlog(index, { sortOrder: Number(event.target.value || 0) })}
                  className="rounded border border-[#3a3f4d] bg-[#0E1016] px-2 py-1"
                />
                <div className="flex items-center gap-4 text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={blog.available}
                      onChange={(event) => updateBlog(index, { available: event.target.checked })}
                    />
                    Available
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={blog.isActive}
                      onChange={(event) => updateBlog(index, { isActive: event.target.checked })}
                    />
                    Active
                  </label>
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => void handleBlogImageUpload(event, index)}
                    className="max-w-[180px] text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => removeBlog(index)}
                    className="rounded bg-[#ff4d4d] px-2 py-1 text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AdminPage;
