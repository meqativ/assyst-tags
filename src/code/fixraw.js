{js:(async()=>{ignore:{
args = message?.content
  ? args.length > 0 ? (args[0]+message.content.split(args[0])[1]).split(" ") : []
  : args; // 😔
const file = message?.referenced_message?.attachments?.[0];
if (!file) return "tag file not found";
const { filename, url, content_type } = file;
if (!filename.startsWith("tag-")) return "filename must start with tag-";
if (!content_type.startsWith("text/plain")) return "invalid content type"

let tag_src = await fetch(url)
  .then(res=>res.text())
let warn = [];
let lang = "";
if (tag_src.includes("\{")) lang = "js"
if (/\\\{\s*rs:/.test(tag_src)) lang = "rs"; // example
if (tag_src.includes("```")) warn.push("codeblocks detected, make sure to replace them or use --raw");
if (args.includes("--raw")) return tag_src;
if (!args.includes("--backtick-enjoyer")) tag_src = tag_src.replaceAll("```","` ``");
if (!args.includes("-b")) tag_src = tag_src.replaceAll("```","` ``")
let /*me*/ out = warn.reduce((acc, current) => acc + "-# " + current + '\n', '')+"```"+lang+"\n[tag_src]```"
if (out.length - 9 > 2000) {
  warn.push("tag contents cropped, too long to display fully")
  out = warn.reduce((acc, current) => acc + "-# " + current + '\n', '')+"```"+lang+"\n[tag_src]```"
  tag_src = tag_src.slice(0, 2000 - out.length - 9)
}
  return out.replace("[tag_src]", tag_src)
}})()}
