export async function onRequestGet(ctx) {
    // This was created based on instructions for serving R2 assets:
    // https://developers.cloudflare.com/pages/tutorials/use-r2-as-static-asset-storage-for-pages/#serve-r2-assets-from-pages
    // The actual media live in an R2 Bucket in my Cloudflare account
    console.log("hi!");
    const path = new URL(ctx.request.url).pathname.replace("/media/", "");
    const file = await ctx.env.MEDIA.get(path);
    if (!file) return new Response(null, { status: 404 });
    return new Response(file.body, {
        headers: { "Content-Type": file.httpMetadata.contentType },
    });
}
