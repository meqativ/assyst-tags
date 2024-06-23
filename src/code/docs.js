{js:{ignore:(async()=>{
    const SUBTAGS_GIST = "https://gist.github.com/y21/bd58942059ca9f1162b1616ee049be19"
    args = args.join(" ").split(" ")
    let [fullPrefix, prefix, commandName, tagName] = message?.content?.match(/^([^ ]{0,14} ?)(tag|t) ([^ ^\n]{0,})/i) || ["@Assyst#0384 tag <name>", "@Assyst#0384", " tag", "<name>"];
    
    const usage = `**Usage:** ${fullPrefix} [nothing / subtag's name / --list]`;
    const docsRaw = await fetch(SUBTAGS_GIST + "/raw")
        .then(res => res.text())
        .catch(e => {throw `Failed to load the [subtag docs gist](${SUBTAGS_GIST})\n${e?.stack??e}`});
    const parsedRawTags = docsRaw
        .split("### Subtags\n\n####")[1]
        .split(/\n\n###/gm)
        .map(r=>r.replaceAll("### ", ""))
        .map(str=>str.substring(1,str.length));
    
    const tags = [];
    
    for (const rawTag of parsedRawTags) {
        const names = rawTag.split("\n").filter(name => name.startsWith("\{"));
        tags.push({
            names,
            description: rawTag.split(names.join("\n")+"\n").at(-1),
            searchnames: names.map(n=>n.substring(1,n.length-1)).map(n=>(n.includes(":")) ? n.split(":")[0] : n)
        })
    };
    if (args.length === 1 && args[0] === "--list") 
        return `Are you looking for a list of tags? Use \`${prefix}${commandName} list\` ${message.guild_id === "1099115731301449758" ? `or \`${prefix}${commandName} cooltags\`` : ""} instead!\n\n`+
            `**Showing all subtags for tag scripting**\n`+
            `\`\`\`\n${tags.flatMap(t=>t.searchnames[0]).join(", ")}\`\`\`\n`+
            `Use \`${prefix}${commandName} ${tagName} [subtag's name]\` for more info on a subtag.\n`+
            `More information on tags [**here**](<${SUBTAGS_GIST}>).\n`+
            `Invite the bot [**using this link**](<https://jacher.io/assyst>).\n`+
            `Support the bot by becoming a patron on [**it's patreon**](<https://patreon.com/jacher>).`;

    if (args[0] === "--list") args.shift();
    const requestedSubtag = args[0] ? tags.find(tag => tag.searchnames.includes(args[0])) : tags[Math.floor(Math.random()*tags.length)];
    if (!requestedSubtag) return `> subtag ${args[0]} not found\n${usage}`;
    return `## ${requestedSubtag.names.join(" • ")}\n`+
        `${requestedSubtag.description}\n\n`+
        `${(!args[0]) ? "showing random subtag • " : ""}[\`source\`](<${SUBTAGS_GIST}#${requestedSubtag.names[0].toLowerCase().replaceAll(" ", "-").replace(/[^a-z0-9-]/g, '')}>) • ${usage}`
})()}}
