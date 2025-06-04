export async function onRequestGet(ctx: {
    request: { url: string | URL };
    env: { MEDIA: { get: (arg0: string) => any } };
}) {
    console.log("hi!");
    const path = new URL(ctx.request.url).pathname.replace("/media/", "");
    const file = await ctx.env.MEDIA.get(path);
    if (!file) return new Response(null, { status: 404 });
    return new Response(file.body, {
        headers: { "Content-Type": file.httpMetadata.contentType },
    });
}
