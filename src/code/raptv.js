{js:
const mediaUrlProvided = "{get:mediaUrl}";
const getBuff = (path, yop) => fetch(yop ? "http://meqativ.github.io/assyst-tags/src/" + path : path).then(res=>res.arrayBuffer());
{ignore:(async () => {
let mediaUrl = mediaUrlProvided;
if (!mediaUrl.startsWith("https://")) mediaUrl = "";
if (message.attachments?.[0]?.proxy_url) mediaUrl = message.attachments?.[0]?.proxy_url;
if (!mediaUrl) return "Please provide a background image"
const flag = (f) => args.find(arg => arg.startsWith("--"+f));
const getarg = (name) => {
    const h = args.find(arg => arg.startsWith("--"+name+"="))?.split?.("=");
    if (!h) return undefined;
    return { name: h[0], value: h[1] };
}
args = args.join(" ").split(" ");
const text = args.filter(arg => !arg.startsWith("--")).join(" ");
let [ font, line, shadow, media ] = await Promise.all([
	getBuff(`assets/fonts/Gobold-Bold.ttf`, 1)
        .then(buff => new Uint8Array(buff))
        .catch(e=>{throw `Failed to load/download font "Gobold-Bold.ttf"\n${e?.stack??e}`}),
    getBuff(`assets/oulays/raptv/raptvLine.png`, 1)
        .then(ImageScript.decode)
        .catch(e=>{throw `Failed to load/download the raptv line\n${e?.stack??e}`}),
    flag("no-shadow") ? 0 : getBuff(`assets/oulays/raptv/gradient.png`, 1)
        .then(ImageScript.decode)
        .catch(e=>{throw `Failed to load/download the shadow\n${e?.stack??e}`}),
    getBuff(mediaUrl)
        .then(ImageScript.decode)
        .catch(e=>{throw `Failed to load/download the background image (source: ${mediaUrl})\n${e?.stack??e}`}),
        
].filter(Boolean)).catch(e=>{throw e});
if (!flag("no-shadow")) {
    shadow.resize(1000, 1000);
    shadow.composite(line,0,0)
    line = shadow;
}
const layout = new ImageScript.TextLayout({
	maxWidth: 940,
	horizontalAlign: "middle",
});
const textRender = await ImageScript.Image.renderText(
		font,
		80,
		text,
		0xffffffff,
		layout
	);
line.composite(textRender, 30, 820-textRender.height);
media.cover(1000, 1000);
media.composite(line, 0, 0);
return media.encode(9)
})()}}
