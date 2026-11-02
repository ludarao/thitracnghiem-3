import { unstable_cache } from "next/cache";
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { failure } from "../../../lib/server";
import { siteBranding } from "../../../lib/site-branding.mjs";
import type { ExamConfig } from "../../../types/quiz";

// Match the existing config cache and invalidate with the same tag on Admin save.
const publicBranding = unstable_cache(
  async () => {
    const row = await prisma.quizSettings.findUnique({
      where: { id: "main" },
      select: { config: true },
    });
    return siteBranding(
      (row?.config as unknown as ExamConfig | undefined)?.siteBranding,
    );
  },
  ["quiz-site-branding-v1"],
  { revalidate: 60, tags: ["quiz-config"] },
);

export async function GET() {
  try {
    return NextResponse.json(
      { success: true, branding: await publicBranding() },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    return failure(error);
  }
}
