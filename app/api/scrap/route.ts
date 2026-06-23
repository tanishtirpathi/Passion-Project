import { prisma } from "@/lib/prisma";
import FirecrawlApp from "@mendable/firecrawl-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return Response.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }

    const app = new FirecrawlApp({
      apiKey: process.env.FIRECRAWL_API_KEY,
    });

    const crawl = await app.crawlUrl(url, {
      limit: 100,
      scrapeOptions: {
        formats: ["markdown"],
      },
    });

    const monitor = await prisma.monitor.create({
      data: {
        userId: 123,
        url: url
      }
    });
    console.log("Monitor created:", monitor);
    return Response.json({
      success: true,
      pages: crawl.data?.length || 0,
      data: crawl.data,
    });

  } catch (error: any) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}