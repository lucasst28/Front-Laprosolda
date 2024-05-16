export async function GET() {
    return new Response(JSON.stringify(true), { status: 200})
}