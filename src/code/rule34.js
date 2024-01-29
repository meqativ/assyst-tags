{js:
const maxTagAmount = +"{get:maxTagAmount}" || 15;{ignore:
let base = (isApi) => `https://${isApi?"api.":""}rule34.xxx/index.php`;
async function r34(tags, options){
    options ??= {};
    options.index ??= 0;
    const url = `${base(1)}?page=dapi&tags=${tags.map(encodeURIComponent).join("+")}&s=post&q=index&json=1&limit=1${options.index ? `&pid=${options.index}` : ""}`;
    let rawResponse = await fetch(url)
        .then(res => res.text());
    if (rawResponse.length == 0) throw [404]; // no posts
    if (!rawResponse.startsWith("[")) throw [416, rawResponse]; // some other error ocurred

    return JSON.parse(rawResponse)
}

args = args.join(" ").split(" ");
const flag = (f) => args.find(arg => arg.startsWith("--"+f));
const mu = (name, url, m="") => m+`[\`${name}\`](${url})`+m;
(async () => {
    if (flag("help")) {
        let [,prefix,commandName,tagName] = message.content.match(/^([^ +]) ?(tag|t) ([^ ]+)/);
        const r = n => " ".repeat(n);
        function make(args) {
            const maxWName = args.flatMap(arg => arg[0])
                .reduce((r, name) => name.length > r ? name.length : r, 0)
            const maxWDescription = args.flatMap(arg => arg[1])
                .reduce((r, desc) => desc.length > r ? desc.length : r, 0)

            return args
                .map(arg => ` --${arg[0].padEnd(maxWName)} ${arg[1].padEnd(maxWDescription)}`)
                .join("\n")
        }

        return`### Usage: ${prefix}${commandName} ${tagName} [query…]
        Arguments:\n\`${make([
        ["orig", "uses original file link as the shown media"],
        ["raw", "returns the raw JSON of the post"],
        ["index=num", "(0 ≤ num) which result to show"],
        ["url", "return only the media url"]])}\``
    }
    let rawIndex = flag("index="),
        index;
    if (rawIndex = rawIndex?.split?.("=")?.[1]) {
        index = parseInt(rawIndex);
        if (Number.isNaN(index)) return "💥 --index value must be a number";
        if (index < 0) return "💥 --index value must be a positive number";
    }
    debugger;
    let post;
    try {
        post = (await r34(args.filter(arg => !arg.startsWith("--")), { index }))[0];
    } catch (err) {
        if(err[0] === 404) return "💥 Post Not Found";
        if(err[0] === 416 && index) return "💥 --index too far, api limit";
        if(err[0] === 416) return "💥 Something went wrong\n"+err[1];
        
        return `💥 An error ocurred while trying to get the post\n\`\`\`js\n${u?.stack??u}\`\`\``
    }
    if (post === undefined && index) return "💥 --index out of bounds";
    
    if(flag("raw")) return JSON.stringify(post, 0, 2);
    if(flag("url")) return `<${post.file_url.split(" ")[0]}>`;
    
    post.tags = post.tags.split(" ");
    let lines = [];
    const start = `${mu(`Post`, `<${base()}?page=post&s=view&id=${post.id}>`)}ed by ${mu(post.owner, `<${base()}?page=account&s=profile&uname=${post.owner}>`)}\n`+
    `${flag("tagless") && post.tags.length > 0 ? "" : `> ${post.tags.slice(0,maxTagAmount-1).join(", ")}${post.tags.length>maxTagAmount?` & ${post.tags.length-maxTagAmount} more…`:""}`}\n`;
    lines.push(`\`${post.score == 0 ? "◽" : (post.score < 0 ? "🟥" : "🟩")} ${post.score} score\``);
    if (post.source && post.source.startsWith("https://"))
    lines.push(
        post.source.split(" ")
            .map((url, i) => mu(0 !== i ? "#"+(i+1) : "source", `<${url}>`))
            .join(" · "));
    
    flag("orig")
        ? lines.push(mu("raw",post.file_url+" ", "||"))
        : (
            lines.push(mu("raw", `<${post.file_url}>`)),
            lines.push(mu("preview", post.preview_url+" ", "||"))
        )
    return start + lines.join(" • ")
})()
}}
