import { NextRequest, NextResponse } from "next/server";
import {
  fetchAdminSiteContent,
  saveAdminSiteContent,
} from "../../../lib/site-content-db";
import { SiteContent } from "../../../lib/site-content";

export const dynamic = "force-dynamic";

const isAuthorized = (request: NextRequest) => {
  const password = process.env.ADMIN_PANEL_PASSWORD;
  if (!password) {
    return true;
  }

  return request.headers.get("x-admin-password") === password;
};

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const content = await fetchAdminSiteContent();
    return NextResponse.json(content);
  } catch (error) {
    console.error("Admin content GET failed", error);
    return NextResponse.json({ error: "Unable to load admin content" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const content = (await request.json()) as SiteContent;
    await saveAdminSiteContent(content);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Admin content PUT failed", error);
    return NextResponse.json({ error: "Unable to save admin content" }, { status: 500 });
  }
}
