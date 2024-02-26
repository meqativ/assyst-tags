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
	//^ use replied message as text
	
	if (args.length === 1 && args[0] === "") {
		ctx.usesSONICSAYS ??= {};
		if (!ctx.usesSONICSAYS[message.author.id]) ctx.usesSONICSAYS[message.author.id] = 0;
		ctx.usesSONICSAYS[message.author.id] += 1;
        let stuff = message.content.match(/^(.+)? ?(tag|t) ([^ ^\n]+)/);
        const fprefix = stuff[0]; // full prefix for the tag run [0] eg. "-t sonicsays"
        const prefix = stuff[1] || ""; //        used bot prefix [1] eg. "-"
        const commandName = stuff[2]; //       used command name [2] eg. "t" or "tag"
        const tagName = stuff[3]; //               used tag name [3] eg. "sonicsays" or "hiya" if fprefix is "-t hiya"
        return `\`\`\`ansi\n[33mUsage:[39m ${prefix}${commandName} ${tagName} [text…]\n`+
        `\n\`\`\`ansi\n`+
        `[36mExamples: [39m\n`+
        [
            ` ${fprefix}`,
            ` ${fprefix} explosion`,
            ` ${fprefix} some more pointless text`,
            ` ${fprefix} yesterday i ass systed`,
            ` ${fprefix} why`,
            ` ${fprefix} hell yeah well done`
        ].join("\n")+
`\`\`\``
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
