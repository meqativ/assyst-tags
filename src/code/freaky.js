{js:{ignore:
const freakyCharMap = {
    a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡",
    e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥",
    i: "𝔦", j: "𝔧", k: "𝔨", l: "𝔩",
    m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭",
    q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱",
    u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵",
    y: "𝔶", z: "𝔷",
    
    A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇",
    E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ",
    I: "ℑ", J: "𝔍", K: "𝔎", L: "𝔏",
    M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓",
    Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗",
    U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛",
    Y: "𝔜", Z: "ℨ"
}
const boldFreakyCharMap = {
    a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉",
    e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍",
    i: "𝖎", j: "𝖏", k: "𝖐", l: "𝖑",
    m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕",
    q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙",
    u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝",
    y: "𝖞", z: "𝖟",
    
    A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯",
    E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳",
    I: "𝕴", J: "𝕵", K: "𝕶", L: "𝕷",
    M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻",
    Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
    U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃",
    Y: "𝖄", Z: "𝖅",
}
const freaky = (text, bold) => text.split("").map(a=>(bold ? boldFreakyCharMap : freakyCharMap)[a] ?? a).join("");
const flag = (name) => args.find(arg => arg.startsWith("--" + name));

(()=>{
    args = args.join(" ").split(" ");

    const text = args.filter(arg => !arg.startsWith("--")).join(" ");
    
    if (flag("help") || flag("freaky-asf") || !text) {
        // more info on these in sonicsays.js
        let [ fprefix, prefix, commandName, tagName ] = message.content.match(/^([^ ]+)? ?(tag|t) ([^ ^\n]+)/i) || ["@Assyst#0384 tag <name>", "@Assyst#0384", " tag", "<name>"];
        prefix ||= "";
        
        function make(args) {
            const maxWidthNames = args.flatMap(arg => arg[0])
                .reduce((r, name) => name.length > r ? name.length : r, 0)
            return args
                .map(arg => ` --${arg[0].padEnd(maxWidthNames)}  ${arg[1]}`)
                .join("\n")
        }
        if (flag("freaky-asf")) {
             return `\`\`\`ansi\n[33m𝔘𝔰𝔞𝔤𝔢:[39m ${freaky(prefix)}${freaky(commandName)} ${freaky(tagName)} […𝔞𝔯𝔤𝔲𝔪𝔢𝔫𝔱𝔰…] […𝔮𝔲𝔢𝔯𝔶…]\n`+
                                `[30m𝔑𝔬𝔱𝔢: […𝔮𝔲𝔢𝔯𝔶…] 𝔠𝔬𝔲𝔩𝔡 𝔟𝔢 𝔞𝔫𝔶𝔱𝔥𝔦𝔫𝔤 𝔱𝔥𝔞𝔱 𝔡𝔬𝔢𝔰𝔫'𝔱 𝔰𝔱𝔞𝔯𝔱 𝔴𝔦𝔱𝔥 "--" (𝔞𝔯𝔤𝔲𝔪𝔢𝔫𝔱𝔰 𝔰𝔱𝔞𝔯𝔱 𝔴𝔦𝔱𝔥 𝔱𝔥𝔞𝔱, 𝔱𝔥𝔢𝔶'𝔯𝔢 𝔰𝔭𝔩𝔦𝔱 𝔟𝔶 𝔰𝔭𝔞𝔠𝔢)[39m\n\n`+
                                `[36m𝔄𝔯𝔤𝔲𝔪𝔢𝔫𝔱𝔰:[39m\n${make([
                                    [      "𝔥𝔢𝔩𝔭", "𝔰𝔥𝔬𝔴𝔰 𝔱𝔥𝔦𝔰 𝔥𝔢𝔩𝔭 𝔪𝔢𝔰𝔰𝔞𝔤𝔢"  ],
                                    [      "𝔟𝔬𝔩𝔡", "𝔪𝔞𝔨𝔢𝔰 𝔱𝔥𝔢 𝔬𝔲𝔱𝔭𝔲𝔱 𝔱𝔢𝔵𝔱 𝔟𝔬𝔩𝔡" ],
                                    [ "𝔣𝔯𝔢𝔞𝔨𝔶-𝔞𝔰𝔣", "𝔠𝔥𝔞𝔫𝔤𝔢𝔰 --𝔥𝔢𝔩𝔭"        ]
                                ])}\n\n`+
                                `[36m𝕰𝖝𝖆𝖒𝖕𝖑𝖊𝖘: [39m\n`+
                                [
                                    ` ${freaky(fprefix)} 𝔥𝔦 𝔱𝔥𝔦𝔰 𝔦𝔰 𝔰𝔬𝔪𝔢 𝔢𝔵𝔞𝔪𝔭𝔩𝔢 𝔦𝔡𝔨`,  
                                    ` ${freaky(fprefix)} 𝔞𝔫𝔬𝔱𝔥𝔢𝔯 𝔢𝔵𝔞𝔪𝔭𝔩𝔢 𝔟𝔲𝔱 𝔱𝔥𝔦𝔰 𝔴𝔦𝔩𝔩 𝔟𝔢 𝔟𝔬𝔩𝔡 --𝔟𝔬𝔩𝔡 `,  
                                    ` ${freaky(fprefix)} --𝔟𝔬𝔩𝔡 𝔢𝔵𝔭𝔩𝔬𝔰𝔦𝔬𝔫`,  
                                    ` ${freaky(fprefix)} 𝔰𝔬𝔪𝔢 𝔪𝔬𝔯𝔢 --𝔟𝔬𝔩𝔡 𝔭𝔬𝔦𝔫𝔱𝔩𝔢𝔰𝔰 𝔱𝔢𝔵𝔱`,  
                                    ` ${freaky(fprefix)} 𝔶𝔢𝔰𝔱𝔢𝔯𝔡𝔞𝔶 𝔦 𝔞𝔰𝔰 𝔰𝔶𝔰𝔱𝔢𝔡 --𝔟𝔬𝔩𝔡 `,  
                                    ` ${freaky(fprefix)} 𝔴𝔥𝔶`,  
                                    ` ${freaky(fprefix)} 𝔥𝔢𝔩𝔩 𝔶𝔢𝔞𝔥 𝔴𝔢𝔩𝔩 𝔡𝔬𝔫𝔢`
                                ].join("\n")+"```";
        } else {
             return `\`\`\`ansi\n[33mUsage:[39m ${prefix}${commandName} ${freaky(tagName)} […arguments…] […query…]\n`+
                                `[30mNote: […query…] could be anything that doesn't start with "--" (arguments start with that, they're split by space)[39m\n\n`+
                                `[36mArguments:[39m\n${make([
                                    [       "help", "shows this help message"    ],
                                    [       "bold", "makes the output text bold" ],
                                    [ "freaky-asf", "changes --help"             ]
                                ])}\n\n`+
                                `[36mExamples: [39m\n`+
                                [
                                    ` ${fprefix} hi this is some example idk`,
                                    ` ${fprefix} another example but this will be bold --bold`,
                                    ` ${fprefix} --bold explosion`,
                                    ` ${fprefix} some more --bold pointless text`,
                                    ` ${fprefix} yesterday i ass systed --bold`,
                                    ` ${fprefix} why`,
                                    ` ${fprefix} hell yeah well done`
                                ].join("\n")+"```";
        }
        
    }
    return freaky(text, flag("bold"))
})();}}
