import { createSessionId, sendMessage } from "./watson_connection/connection";

export async function GET(res, rep) {
    const session = await createSessionId();

    return new Response(JSON.stringify(session), {
        status: 200,
    });
}

export async function POST(res, rep) {
    const { content, sessionId } = await res.json();
    // console.log(content);
    const watsonResponse = await sendMessage(content, sessionId);

    return new Response(JSON.stringify(watsonResponse), {
        status: 200,
    });
}
