const AssistantV1 = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth");

const apiKey = "0lJnTbstdhzaNRgr5If2kWqxMw8w3numKUBDoo8VhiM2";
const serviceUrl =
    "https://api.au-syd.assistant.watson.cloud.ibm.com/instances/8d261ed0-9c68-47f9-b47d-e0607deeb9b9";
const assistantId = "bde3d480-8416-4c16-b70c-d0aaf6a597e3";

const assistant = new AssistantV1({
    version: "2023-09-21", // Versão da API do Watson Assistant
    authenticator: new IamAuthenticator({
        apikey: apiKey,
    }),
    serviceUrl: serviceUrl,
});

async function createSessionId() {
    const res = await assistant.createSession({
        assistantId: assistantId,
    });
    return res.result.session_id;
}

async function sendMessage(content, sessionId) {
    const res = await assistant.message({
        assistantId: assistantId,
        sessionId: sessionId,
        input: {
            text: content,
        },
    });
    const message = res.result.output.generic[0]?.text ?? "Não tem menssagem";
    return message;
}

module.exports = {
    createSessionId,
    sendMessage,
};
