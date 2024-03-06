
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
        by: "system", text: `You're a Discord bot called "Assyst", but only mention it casually. Your current task is to assist the user that goes by the name of "${message.author.username.replaceAll("\"", "")}". You only have partial access to the message history. When replying use the language that they're expecting you to use
Try to use emojis, lists and **markdown** in your responses to make them more interesting and easier to talk. Also talk like a real human would (lowercase letters) and don't act like ai. If they aren't saying anything try begin by asking them what they want to do.
Make preferably concise responses. (about 10 sentences max and 500 characters max)`
    }
fetch("https://ai.aesthetic.computer/api/ask", {
    method: "POST",
    body: JSON.stringify({ hint: "character", messages: tmp })
}).then(r => `󠄴󠄴󠄴`+r.text())
}}
