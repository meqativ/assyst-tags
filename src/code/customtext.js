{js:{ignore:(async()=>{
const faces = {
    medieval: {
        normal: {
            " ": "  ",
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
        },
        bold: {
            " ": "  ",
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
    },
    cursive: {
         normal: {
            " ": "  ",
            A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓",
            E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗",
            I: "𝓘", J: "𝓙", K: "𝓚", L: "𝓛",
            M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟",
            Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
            U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧",
            Y: "𝓨", Z: "𝓩",
        
            a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭",
            e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱",
            i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵",
            m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹",
            q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
            u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁",
            y: "𝔂", z: "𝔃",    
        }/*, I HAVE TO GO TO SLEEP
𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵 𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏
        bold: {
            A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇",
            E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ",
            I: "ℑ", J: "𝔍", K: "𝔎", L: "𝔏",
            M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓",
            Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗",
            U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛",
            Y: "𝔜", Z: "ℨ",
        
            a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡",
            e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥",
            i: "𝔦", j: "𝔧", k: "𝔨", l: "𝔩",
            m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭",
            q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱",
            u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵",
            y: "𝔶", z: "𝔷",   
        }*/
    }
}

const flag = (f) => args.find(arg => arg.startsWith("--"+f));
const getarg = (name) => {
    const h = args.find(arg => arg.startsWith("--"+name+"="))?.split?.("=");
    if (!h) return undefined;
    return { name: h[0], value: h[1] };
}
const convert = (text, face, bold) => text.split("").map(a=>(faces[face][bold ? "bold" : "normal"])[a] ?? a).join("");
args = args.join(" ").split(" ");

const text = args.filter(arg => !arg.startsWith("--")).join(" ");

// more info on these in sonicsays.js
let [ tagPrefix, prefix, commandName, tagName ] = message.content.match(/^([^ ]{0,14} ?)(tag|t) ([^ ^\n]{0,})/i) || ["@Assyst#0384 tag <name>", "@Assyst#0384", " tag", "<name>"];
if (flag("help") || (args.length === 1 && args[0] === "")) {
    function make(args) {
        const maxWidthNames = args.flatMap(arg => arg[0])
            .reduce((r, name) => name.length > r ? name.length : r, 0)
        return args
            .map(arg => ` --${arg[0].padEnd(maxWidthNames)}  ${arg[1]}`)
            .join("\n")
    }
    return `\`\`\`ansi\n[33mUsage:[39m ${tagPrefix} […arguments…] […query…]\n`+
                        `[30mNote: […query…] could be anything that doesn't start with "--" (arguments start with that, they're split by space)[39m\n\n`+
                        `[36mArguments:[39m\n${make([
                            [        "help", "shows this help message"                          ],
                            [        "face", "choose the version of the custom text"            ],
                            [       "faces", "show available faces"                             ],
                            [        "bold", "uses the bold variant of the face (if available)" ]
                        ])}\n\n`+
                        `[36mExamples: [39m\n`+
                        [
                            ` ${tagPrefix} --faces`,
                            ` ${tagPrefix} --face=cursive hi this is some example idk`,
                            ` ${tagPrefix} --face=cursive another example but this will be bold --bold`,
                            ` ${tagPrefix} --face=cursive --bold explosion`,
                            ` ${tagPrefix} --face=cursive some more --bold pointless text`,
                            ` ${tagPrefix} --face=cursive yesterday i ass systed --bold`,
                            ` ${tagPrefix} --face=medieval why`,
                            ` ${tagPrefix} --face=medieval --bold hell yeah well done`
                        ].join("\n")+"```";
}
const face = getarg("face");
if (!text) return `Please input some text to transform with a face.\n`+
    `Example: \`${tagPrefix} ${flag("bold") ? "--bold " : ""}--face=${face?.value ?? "cursive"} hih ihh ih ih ihihiih ihihiihhiii hiiiiiiiiii\``;
if (!face) 
    return `Please specify a 'face' to use for teh custom text.\n`+
           `Example: \`${tagPrefix} ${flag("bold") ? "--bold " : ""}--face=cursive ${text}\``;
if (!Object.keys(faces).includes(face.value))
    return `Unknown Face '${face.value}'. Please use one of the following: ${Object.keys(faces).join(", ")}.\n`+
           `Example: \`${tagPrefix} ${flag("bold") ? "--bold " : ""}--face=cursive ${text}\``;
                                                
if (!faces[face.value]["bold"] && flag("bold"))
    return `Face '${face.value}' doesn't have the bold variant.\n`;
    
return convert(text, face.value, flag("bold"))
})()}}
