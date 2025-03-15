{js:{ignore:
const OUT = (thing) => { console.log(thing); return thing }
if (globalThis['discord']) { // notsobot
	message = discord.message
	args = discord.variables.__args
}
let forceNoTags = false;
let maxTagAmount = 15;
let temp;
const fromQueryParams = (queryParams) => Object.fromEntries(queryParams.split('&').map((i) => { return i = i.split('='), i[1] = decodeURIComponent(i[1]), i[1] === "undefined" ? i[1] = true : "", i }));
const toQueryParams = (obj) => Object.entries(obj).map(([k, v]) => `${k}${v === true ? "" : "="}${v === true ? "" : encodeURIComponent(
	typeof v === "object"
		? (
			Array.isArray(v)
				? Array.prototype.join.call(v, " ")
				: JSON.stringify(v)
		)
		: v)}`).join("&");
const r34url = (api, file, queryParams) => `https://${api ? "api." : ""}rule34.xxx/${file}?${toQueryParams(queryParams)}`;
async function r34list(tags, options) {
	options ??= {};
	options.index ??= 0;
	const qps = {
		page: "dapi",
		tags: options.onepost ? "" : tags,
		s: "post",
		q: "index",
		json: "1",
		limit: "1",
	}
	if (options.onepost) qps.id = options.onepost
	else if (options.index) qps.pid = options.index;
	const url = `${r34url(true, "index.php", qps)}`
	let rawResponse = await fetch(url)
		.then(res => res.text());
	if (rawResponse.length == 0) throw [404]; // no posts
	if (!rawResponse.startsWith("[")) throw [416, rawResponse]; // some other error ocurred

	return JSON.parse(rawResponse)
}

args = message?.content
	? args.length > 0 ? (args[0] + message.content.split(args[0])[1]).split(" ") : []
	: args; // 😔
const flag = (f) => args.find(arg => arg.startsWith("--" + f));
const getarg = (name) => {
	const h = args.find(arg => arg.startsWith("--" + name + "="))?.split?.("=");
	if (!h) return undefined;
	return { name: h[0], value: h[1] };
}
const mu = (name, url, m = "") => m + `[\`${name}\`](${url})` + m;
const err = (text) => `💥 \`\`${text}\`\``;

(async () => {
	if (flag("help")) {
		let stuff = message?.content?.match?.(/^([^ ]{0,14} ?)(tag|t) ([^ ^\n]{0,})/i) || ["/tag run arguments:", "/", " tag run", "arguments:"];
		const tagPrefix = stuff[0]; // full prefix for the tag run [0] eg. "-t rule34"
		const prefix = stuff[1]; //              used bot prefix [1] eg. "-"
		const commandName = stuff[2]; //       used command name [2] eg. "t" or "tag"
		const tagName = stuff[3]; //               used tag name [3] eg. "rule34" or "hiya" if tagPrefix is "-t hiya"
		function make(args) {
			const maxWidthNames = args.flatMap(arg => arg[0])
				.reduce((r, name) => name.length > r ? name.length : r, 0)
			return args
				.map(arg => ` --${arg[0].padEnd(maxWidthNames)}  ${arg[1]}`)
				.join("\n")
		}
		return OUT(`\`\`\`ansi\n[33mUsage:[39m ${prefix}${commandName} ${tagName} […args…] […query…]\n` +
			`[30mNote: […query…] could be anything that doesn't start with "--" (args start with that, they're split by space)[39m\n\n` +
			`[36mArgs:[39m\n${make([
				["help", "shows this help message"],
				["raw", "returns the raw JSON of the post"],
				["id=num", "returns a specific post by id"],
				["url", "return only the media url"],
				["index=num", "(0 ≤ num) which result to show"],
				["orig", "uses original file link as the shown media"],
				["no-tags", "hide all tags"],
				["show-matched-tags", "highlight tags from the query (only ta*1 and tag1 tag2)"],
				["more-tags", "show all tags, not just the one's that match the search"]])}\n\n` +
			`[36mExamples: [39m\n` +
			[
				` ${tagPrefix} male/male`,
				` ${tagPrefix} --raw`,
				` ${tagPrefix} male/male --no-tags --index=6`,
				` ${tagPrefix} male/male --orig ejaculating`,
				` ${tagPrefix} --id=7582834`,
				` ${tagPrefix} --id=7582834 --raw`
			].join("\n") +
			`\`\`\``)
	}
	let rawIndex = getarg("index")?.value,
		index;
	if (rawIndex) {
		index = parseInt(rawIndex);
		if (Number.isNaN(index)) return OUT(err("--index=num value must be a number"));
		if (index < 0) return OUT(err("--index=num value must be a positive number"));
	}
	let rawId = getarg("id")?.value,
		onepost = false;
	if (rawId) {
		onepost = parseInt(rawId);
		if (Number.isNaN(onepost)) return OUT(err("--id=num value must be a number"));
		if (onepost < 0) return OUT(err("--index=num value must be a positive number"));
	}
	if (args[0].startsWith("https://rule34.xxx/index.php?page=post&s=view&id="))
		onepost = fromQueryParams(args[0].split("https://rule34.xxx/index.php?")[1]).id
	if (/^\d+$/.test(args[0]))
		onepost = parseInt(str)

	let post;
	const tags = args.filter(arg => !arg.startsWith("--"));
	try {
		post = (await r34list(tags, { index, onepost }))[0];
	} catch (error) {
		const errorCodeblock = `\n\`\`\`js\n${error?.[1]?.stack ?? error?.[1] ?? error}\`\`\``
		if (error[0] === 404) return OUT(err("Post Not Found"));
		if (error[0] === 416 && index) return OUT(err("--index=num too far, api limit"));
		if (error[0] === 416) return OUT(err(`Something went wrong`) + errorCodeblock);

		return OUT(err(`An error ocurred while trying to get the post`) + errorCodeblock)
	}
	if (post === undefined && index) return OUT(err("--index=num out of bounds"));

	if (flag("raw")) return OUT(JSON.stringify(post, 0, 2));
	if (flag("url")) return OUT(`<${post.file_url.split(" ")[0]}>`);



	const postPageURL = r34url(0, "index.php", { page: "post", s: "view", id: post.id });
	const ownerPageURL = r34url(0, "index.php", { page: "account", s: "profile", uname: post.owner });
	// title
	let output = `${mu(`Post`, `<${postPageURL}>`)} (\`${post.id}\`) by ${mu(post.owner, `<${ownerPageURL}>`)}\n`;

	if (!forceNoTags) {
		post.tags = post.tags.split(" ");
		const showMatched = flag("show-matched-tags"),
			moreTags = flag("more-tags");
		const taggers = !showMatched ? post.tags : [];
		if (!flag("no-tags") && showMatched) for (let tag of tags) {
			let regex = new RegExp("(?:\w|^)" + tag.replace(/[/\-\\^$+?.()|[\]{}]/g, '\\$&').replaceAll("*", ".+") + "(?:\w|$)");
			for (const tagI of post.tags) {
				if (regex.test(tagI)) {
					if (!taggers.includes(`**${tagI}**`) || !taggers.includes(tagI)) {
						if (!taggers.includes(tagI)) taggers.push(`**${tagI}**`)
						// rewrite this or remove completely
						let temp;
						if ((temp = taggers.indexOf(tagI), temp !== -1)) taggers[temp] = `**${tagI}**`;
					} else continue;
				} else {
					if (moreTags && !taggers.includes(tagI) && !taggers.includes(`**${tagI}**`)) taggers.push(tagI)
				}
			}
		}
		// push tags
		output += `${flag("no-tags") && post.tags.length > 0
			? ""
			: `> ${taggers.slice(0, maxTagAmount - 1).join(", ")}${taggers.length > maxTagAmount
				? ` & ${taggers.length - maxTagAmount} more…`
				: ""
			}`
			}\n`;
	}
	let pills = [];

	pills.push(`\`${post.score == 0 ? "⬜" : (post.score < 0 ? "🟥" : "🟩")} ${post.score} score\``);

	if (post.source && post.source.startsWith("https://")) pills.push(
		post.source.split(" ")
			.map((url, i) => mu(0 !== i ? "#" + (i + 1) : "source", `<${url}>`))
			.join(" · "));

	flag("orig")
		? pills.push(mu("raw", post.file_url + " ", "||"))
		: (
			pills.push(mu("raw", `<${post.file_url}>`)),
			pills.push(mu("preview", post.preview_url + " ", "||"))
		)
	// push pills
	output += pills.join(" • ")
	return OUT(output)
})()
}}