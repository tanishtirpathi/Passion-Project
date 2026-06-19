// export async function GET() {
//   const response = await fetch(
//     "https://www.tanishtirpathi.me/blog/OpenClaw"
//   );

//   const html = await response.text();

//   console.log(html.length);
//   console.log(html);

//   return Response.json({
//     htmlLength: html.length,
//   });
// }


import FirecrawlApp from "@mendable/firecrawl-js";


export async function GET() {

    const app = new FirecrawlApp({
        apiKey: process.env.FIREWAL_KEY,
    });

    const result = await app.scrapeUrl(
        ""
    );
    console.log(result.markdown);

    return Response.json({
        markdown: result.markdown,
    })
};
