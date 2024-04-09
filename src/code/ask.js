{js:{ignore:(async ()=>{
ctx.messages ??= {};
(()=>{
if (message?.referenced_message?.content?.length > 0) args = args.join(" ").replace(message.referenced_message.content, "").split(" ");

if (ctx.messages?.[message.author.id] !== undefined) {
    if (!message?.referenced_message?.content.startsWith("󠄴󠄴󠄴") || !Array.isArray(ctx.messages?.[message.author.id]) || !ctx.messages?.[message.author.id].every((v,i)=>(i===0) ? true : JSON.stringify(Object.keys(v)) === `["by","text"]`)) return delete ctx.messages?.[message.author.id];
    ctx.messages?.[message.author.id].push({
        by: "system", text: message.referenced_message.content.replace("󠄴󠄴󠄴","")
    }, {
        by: "system", text: `Information about the links in your message (if any): ${message?.referenced_message.embeds.length ? JSON.stringify(message.referenced_message.embeds, 0, 1) : "None"}`
    })
}
})()
const messages = ctx.messages?.[message.author.id] ?? (ctx.messages[message.author.id] = [{toJSON: () => "[prompt]"}])
messages.push({
    by: "user", text: args.join(" ").trim() || "<didn't say anything>"
}, {
        by: "system", text: `Information about the links in the user's message (if any): ${message.embeds.length ? JSON.stringify(message.embeds, 0, 1) : "None"}`
    })
let tmp = [...messages];
tmp[0] = {
    by: "system", text: `You're a Discord bot called "Assyst", but only mention it casually. Your current task is to assist the user that goes by the name "${message.author.username.replaceAll("\"", "")}". You only have partial access to the message history, also you have permissions to send links (https://example.com for example) and you have access to the current date/time, which is ${message.timestamp.replace(".000000+00:00", "").replace("T", " ")} GMT. When replying use the language that they're using to communicate with you. You can use emojis, lists and **markdown** in your responses to make them more interesting. Also talk like a real human would (lowercase letters) and try to act less like an ai. If they aren't saying anything try begin by asking them what they want to do. Make preferably concise responses. (about 10 sentences max and 500 characters max)`
}
const out = await fetch("https://ai.aesthetic.computer/api/ask", {
    method: "POST",
    body: JSON.stringify({ hint: "character", messages: tmp })
}).then(r => `󠄴󠄴󠄴`+r.text()) 
    if (out === "Access Denied.") return "The Ai service this tag was using blocked assyst :+1:, maybe it will return to working state, try later.\n(if i find a working service i'll swap to that, you can `-t delete ask` if you want to put a different tag in place)"
    return out;
})()}}
