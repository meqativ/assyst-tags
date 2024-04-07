{js: // original by @nixco33 on discord (https://discord.com/users/663402246456868894)
const getBuff = (path, yop) => fetch(yop ? "http://meqativ.github.io/assyst-tags/src/" + path : path).then(res=>res.arrayBuffer());
let imageUrl = "{lastattachment}";
{ignore:(async()=>{
    args = args.join(" ").split(" ")
    
    let image = await getBuff(imageUrl)
        .then(ImageScript.decode)
        .catch(e=>{throw `Failed to load/download input image\n${e?.stack ?? e}`});
    let font = await getBuff("assets/fonts/Ubuntu-Regular.ttf", true)
        .then(x => new Uint8Array(x))
        .catch(e=>{throw `Failed to load/download font "Roboto-Light"\n${e?.stack ?? e}`});
    let layout = new ImageScript.TextLayout({
        maxWidth: image.width - 10,
        maxHeight: image.height - 20,
        wrapStyle: "word",
        horizontalAlign: "middle"
    });
    
    // properly splits | , just like in -meme :3
    let [topText, ...bottomText] = args.filter(arg => !arg.startsWith("--")).join(" ").split(/(?<!\\)\|/);
    bottomText = bottomText.map(a => a.trim()).join(" ").trim();
    topText = topText.trim();
    
    let bottomTextRender, topTextRender;
    const _render = (text) => ImageScript.Image.renderText(font, 10 + image.width / 10, text, 0xFFFFFFFF, layout);
    
    if (!(topText || bottomText)) return "Provide text to overlay, separated by | for top and bottom text, e.g. top|bottom";
    
    if (topText) topTextRender = await _render(topText);
    if (bottomText) bottomTextRender = await _render(bottomText);
    
    if (image.length !== undefined) {
        let frames = [];
        for (let frame of image) {
            if (topTextRender) frames.push(frame.composite(topTextRender, image.width / 2 - topTextRender.width / 2, 5));
            if (bottomTextRender) frames.push(frame.composite(bottomTextRender, image.width / 2 - bottomTextRender.width / 2, image.height - bottomTextRender.height - 5));
        }
        
        return new ImageScript.GIF(frames).encode();
    } else {
        if (topTextRender) image.composite(topTextRender, image.width / 2 - topTextRender.width / 2, 5);
        if (bottomTextRender) image.composite(bottomTextRender, image.width / 2 - bottomTextRender.width / 2, image.height - bottomTextRender.height - 5);
        
        return image.encode();
    }
})()}}
