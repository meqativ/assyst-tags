{js:{ignore:(async()=>{
const EMOJIS = {
    x: "<:x2:1244369141490516008>",
    y: "✅",
}
const faces = {
    medieval: {
        meta: [],
        normal: {
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
        meta: [],
        normal: {
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
        },
        bold: {
            A: "𝒜", B: "𝐵", C: "𝒞", D: "𝒟",
            E: "𝐸", F: "𝐹", G: "𝒢", H: "𝐻",
            I: "𝐼", J: "𝒥", K: "𝒦", L: "𝐿",
            M: "𝑀", N: "𝒩", O: "𝒪", P: "𝒫",
            Q: "𝒬", R: "𝑅", S: "𝒮", T: "𝒯",
            U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳",
            Y: "𝒴", Z: "𝒵",

            a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹",
            e: "𝑒", f: "𝒻", g: "𝑔", h: "𝒽",
            i: "𝒾", j: " 𝒿", k: "𝓀", l: "𝓁",
            m: "𝓂", n: "𝓃", o: "𝑜", p: "𝓅",
            q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉",
            u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍",
            y: "𝓎", z: "𝓏",   
        }
    },
    flipped: {
        meta: ["reverse"], 
        normal: {
            Z: "Z", Y: "⅄",
            X: "X", U: "Ո", V: "Ʌ", W: "Ϻ",
            T: "ꓕ", S: "S", R: "ꓤ", Q: "Ꝺ",
            P: "Ԁ", O: "O", N: "N", M: "ꟽ",
            L: "⅂", K: "ꓘ", J: "ᒋ", I: "I",
            H: "H", G: "⅁", F: "ᖵ", E: "Ǝ",
            D: "ᗡ", C: "Ͻ", B: "ꓭ", A: "∀",

            z: "z", y: "ʎ",
            x: "x", u: "n", v: "ʌ", w: "ʍ",
            t: "ʇ", s: "s", r: "ɹ", q: "b",
            p: "d", o: "o", n: "u", m: "ɯ",
            l: "ʅ", k: "ʞ", j: "ɾ", i: "ᴉ",
            h: "ɥ", g: "ƃ", f: "ⅎ", e: "ǝ",
            d: "p", c: "ɔ", b: "q", a: "ɐ",  
        },
    },
    fullwidth: {
        meta: [],
					  " ": "　",
            a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ",
            e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ",
            i: "ｉ", j: "ｊ", k: "ｋ", l: "ｌ",
            m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ",
            q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ",
            u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ",
            y: "ｙ", z: "ｚ",
            
            A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ",
            E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ",
            I: "Ｉ", J: "Ｊ", K: "Ｋ", L: "Ｌ",
            M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ",
            Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ",
            U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ",
            Y: "Ｙ", Z: "Ｚ",

						"1": "１", "2": "２", "3": "３",
						"4": "４", "5": "５", "6": "６",
						"7": "７", "8": "８", "9": "９",
					  					 "0": "０",
						
						"!": "！", 
						"\"": "＂",
						"#": "＃",
						"$": "＄",
						"%": "％",
						"&": "＆",
						"'": "＇",
					  "(": "（",
					  ")": "）",
					  "*": "＊",
					  "+": "＋",
						",": "，",
					  "-": "－",
					  ".": "．",
				    "/": "／",
						":": "：",
					  ";": "；",
					  "<": "＜",
					  "=": "＝",
						">": "＞",
					  "?": "？",
					  "@": "＠",
					  "[": "［",
					  "\\": "＼",
					  "]": "］",
					  "^": "＾",
					  "_": "＿",
						"`": "｀",
					  "{": "｛",
					  "|": "｜",
					  "}": "｝",
					  "~": "～",
					  "¬": "￢",
					  "¯": "￣",
					  "¦": "￤",
					  "¢": "￠",
					  "£": "￡",
					  "¥": "￥",
					  "₩": "￦",
        },
    },
}

const flag = (f) => args.find(arg => arg.startsWith("--"+f));
const getarg = (name) => {
    const h = args.find(arg => arg.startsWith("--"+name+"="))?.split?.("=");
    if (!h) return undefined;
    return { name: h[0], value: h[1] };
}
const convert = (text, face, bold, reverse) => {
    const Face = faces[face];
    if (Face?.meta?.includes?.("reverse")) text = [...text].reverse().join("")
    if (Face?.meta?.includes?.("upper")) text = text.toUpperCase()
	  if (Face?.meta?.includes?.("lower")) text = text.toLowerCase()
	  if (reverse) {
        if (Face.normal) Face.normal = Object.fromEntries(Object.entries(Face.normal).map(e=>e.reverse()))
        if (Face.bold) Face.bold = Object.fromEntries(Object.entries(Face.bold).map(e=>e.reverse()))
    }
    return [...text].map(a=>(Face[bold ? "bold" : "normal"])[a] ?? a).join("")
}
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
                            [        "bold", "uses the bold variant of the face (if available)" ],
                            [        "undo", "reverses applying the face"                       ]
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
                            ` ${tagPrefix} --face=medieval --bold hell yeah well done`,
                            ` ${tagPrefix} --face=cursive --undo 𝓣𝓱𝓮 𝓫𝓪𝓵𝓵𝓼 𝓱𝓪𝓿𝓮 𝓼𝓹𝓸𝓴𝓮𝓷`,
                        ].join("\n")+"```";
}
const face = getarg("face");

if (flag("faces")) {
    return `Known faces:\n`
    + Object.keys(faces).map(face => {
        return `- \`${face}\` (normal: ${faces[face]["normal"] ? EMOJIS.y : EMOJIS.x}, bold: ${faces[face]["bold"] ? EMOJIS.y : EMOJIS.x})`
    }).join("\n")
}

if (!text) return `Please input some text to transform with a face.\n`+
    `Example: \`${tagPrefix} ${flag("bold") ? "--bold " : ""}--face=${face?.value ?? "cursive"} hih ihh ih ih ihihiih ihihiihhiii hiiiiiiiiii\``;
if (!face) 
    return `Please specify a \`face\` to use for the custom text.\n`+
           `Example: \`${tagPrefix} ${flag("bold") ? "--bold " : ""}--face=cursive ${text}\``;
if (!Object.keys(faces).includes(face.value))
    return `Unknown Face \`${face.value}\`. Please use one of the following: ${Object.keys(faces).join(", ")}.\n`+
           `Example: \`${tagPrefix} ${flag("bold") ? "--bold " : ""}--face=cursive ${text}\``;
if (!faces[face.value]["normal"])
    return `Face \`${face.value}\` doesn't have the normal variant.\n`;
if (!faces[face.value]["bold"] && flag("bold"))
    return `Face \`${face.value}\` doesn't have the bold variant.\n`;
    
return convert(text, face.value, flag("bold"), flag("undo"))
})()}}
