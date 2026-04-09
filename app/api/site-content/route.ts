import { NextResponse } from "next/server";
import { fetchPublicSiteContent } from "../../lib/site-content-db";

export const dynamic = "force-dynamic";

export async function GET() {
  const content = await fetchPublicSiteContent();
  return NextResponse.json(content);
}
