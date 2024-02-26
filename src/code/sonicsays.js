{js:
const emojis = \{
        bad_image: "<:bad_image:1105128972364283954>",
        help: "<:help:1099298038125695068>",
        help2: "<a:help:1099938781504745483>",
        \};
    args = `{tag:args|{args}}`.split(" ");
{ignore:(async () => {
    let text = args.join(" "); 
	if (message?.referenced_message && message.referenced_message.content) text = message.referenced_message.content;
	if (args.length === 1 && args[0] === "") {
		ctx.usesSONICSAYS ??= {};
		if (!ctx.usesSONICSAYS[message.author.id]) ctx.usesSONICSAYS[message.author.id] = 0;
		ctx.usesSONICSAYS[message.author.id] += 1;
        let stuff = message.content.match(/^(.+)? ?(tag|t) ([^ ^\n]+)/);
		return `${ctx.usesSONICSAYS[message.author.id] < 5 ? emojis.help : emojis.help2} \`${stuff[0]} [text...]\``;
	}
	try {
		const [sonic, font] = await Promise.all([
			fetch(`https://raw.githubusercontent.com/meqativ/assyst-tags/main/src/assets/sonicsays/bg.png`)
				.then((res) => res.arrayBuffer())
				.then(ImageScript.decode),
			fetch(`https://raw.githubusercontent.com/meqativ/assyst-tags/main/src/assets/sonicsays/font.ttf`)
				.then((res) => res.arrayBuffer())
				.then((a) => new Uint8Array(a)),
		]);

		const layout = new ImageScript.TextLayout({
			maxHeight: 350,
			maxWidth: 525,
			wrapStyle: "word",
			wrapHardBreaks: false,
			horizontalAlign: "top",
		});

		let textOverlay = await ImageScript.Image.renderText(font, 36, text, 0xffffffee, layout);
		sonic.composite(textOverlay, 52, 119, 0);
		return sonic.encode();
	} catch (error) {
		return `${emojis.bad_image} \`\`Failed to generate image${
			`${error}`.includes("RangeError: Image has to be at least 1 pixel wide") ? ". (This tag doesn't support emojis and some other special characters)" : ""
		}\`\` \`\`\`js\n${error?.stack??error}\`\`\``;
	}
	
	})()}}
