
{js:{ignore:
ctx.messages ??= {};
(()=>{
if (ctx.messages?.[message.author.id] !== undefined) {
    if (!message?.referenced_message?.content.startsWith("󠄴󠄴󠄴")) return delete ctx.messages?.[message.author.id];
    ctx.messages?.[message.author.id].push({
        by: "system", text: message.referenced_message.content
    })
    ctx.messages?.[message.author.id].push({
        by: "system", text: `Related link embed information: ${message?.referenced_message?.embeds ? JSON.stringify(message.referenced_message.embeds,0,1) : "None"}`
    })
}
})()
const messages = ctx.messages?.[message.author.id] ?? (ctx.messages[message.author.id] = [
    {toJSON: () => "[prompt]"}
])
messages.push({
    by: "user", text: `${args.join(" ").trim() || "<didn't say anything>"}`
})
if (message.embeds) messages.push({
    by: "system", text: `Related link embed information: ${message?.embeds ? JSON.stringify(message.embeds,0,1) : "None"}`
})
     let tmp = [...messages];
     tmp[0] = {
        by: "system", text: `You're a Discord bot called "Assyst", but only mention it casually. Your current task is to assist the user that goes by the name of "${message.author.username.replaceAll("\"", "")}". You only have partial access to the message history, you also have permission to send links (https://example.com for example) and you have access to the current datetime, which is ${message.timestamp.replace(".000000+00:00", "").replace("T", " ")} GMT. When replying use the language that they're using to communicate with you.
You can use emojis, lists and **markdown** in your responses to make them more interesting. Also talk like a real human would (lowercase letters) and try to act less like an ai. If they aren't saying anything try begin by asking them what they want to do.
Make preferably concise responses. (about 10 sentences max and 500 characters max)`
    }
fetch("https://ai.aesthetic.computer/api/ask", {
    method: "POST",
    body: JSON.stringify({ hint: "character", messages: tmp })
}).then(r => `󠄴󠄴󠄴`+r.text())
}}
