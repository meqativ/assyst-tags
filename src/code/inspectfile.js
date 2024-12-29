{js:(async()=>{ignore:{
	const OUT = (thing) => {
		console.log(thing); return thing
	}
	if (globalThis['discord']) { // notsobot
		message = discord.message
		args = discord.variables.__args
	}
	if (message && args.length > 1) {
		args = (args[0]+message.content.split(args[0])[1]);
	} else {
		args = args.join(" ")
	}
	args = args.replaceAll("\\\\", "").split(/(?<!\\) /).map(a=>a.replaceAll("\\ ", " "))

	const flag = (f) => args.find(arg => arg.startsWith("--"+f));
	const arg = (name) => {
		const h = args.find(arg => arg.startsWith("--"+name+"="))?.split?.("=");
		if (!h) return undefined;
		return { name: h[0], value: h[1] };
	} 
	const mu = (name, url, m="") => m+`[\`${name}\`](${url})`+m; // encapsulate in masked link and optionally a spoiler (pass "||" in m argument)
	const err = (text) => `💥 \`\`${text}\`\``;
	
	const src_placeholder = "[tag_src]"
	const codeblock_replace_with = "` ``"
	const assyst_max_out_length = 2000 // increase wen
	const file = message?.attachments?.[0] ?? message?.referenced_message?.attachments?.[0];
	if (!file) return OUT(err("No file to inspect"));
	const { filename, url } = file;
	
	let file_buff = await fetch(url)
		.then(res=>res.arrayBuffer());

		let isText;
	try {
		new TextDecoder().decode(new Uint8Array(file_buff)).includes("\0");
	} catch (e) {
		isText = e 
	}
	if (typeof isText === "object" && !flag("bypass")) {
		return OUT(err("Not a text file.\n"+
			"Want to preview anyway? Use flag --bypass\n"+
			"You can also see the error using --debug"))
	}
	let file_src = new TextDecoder("utf-8").decode(file_buff)
	let warns = [];
	if (typeof isText === "object" && flag("debug")) warns.push(`${isText?.message??isText}`)
		let lang = "";
	if (flag("tag")) {
		if (file_src.includes("\{")) lang = "js"
		if (/\\\{\s*rs:/.test(file_src)) lang = "rs"; // example
	}
	if (file_src.includes("```")) warns.push(`codeblocks detected, make sure to replace the ${'``'} ${codeblock_replace_with} ${'``'}s or use --plain`);
	if (!args.includes("--plain")) file_src = file_src.replaceAll("```",codeblock_replace_with);

	const genOut = () => warns.reduce((acc, current) => acc + "-# :warning: " + current + '\n', '')
		                   + (flag("plain")
												 ? src_placeholder
												 : ("```" + lang + "\n" + src_placeholder + "```"))

	let /*me*/ out = genOut()
	const file_src_bkp = file_src;
	if ((out.length - src_placeholder.length) + file_src.length > assyst_max_out_length) {
		warns.push("file contents cropped, too long to display fully")
		out = genOut()
		file_src = file_src.slice(0, assyst_max_out_length - (out.length - src_placeholder.length))
	}
	return OUT(out.replace(src_placeholder, file_src))
}})()}