{js:const _face ="{get:face}";{ignore:(async()=>{
	const OUT = (thing) => {console.log(thing); return thing}
if (globalThis['discord']) { // notsobot
	message = discord.message
	args = discord.variables.__args
}
const EMOJIS = {
	x: "<:x2:1244369141490516008>",
	y: "✅",
	empty: "<:spc:1284572119895900292>"
}
const faces = {
	emojis: {
		meta: ["invisSeparators", "lower"],
		normal: {
			" ": EMOJIS.empty,
			10: "🔟",		
			1: "1️⃣",	2: "2️⃣",	3: "3️⃣",
			4: "4️⃣",	5: "5️⃣",	6: "6️⃣",
			7: "7️⃣",	8: "8️⃣",	9: "9️⃣",
				0: "0️⃣",	

			a: "🇦",	b: "🇧",	c: "🇨",	d: "🇩",
			e: "🇪",	f: "🇫",	g: "🇬",	h: "🇭",
			i: "🇮",	j: "🇯",	k: "🇰",	l: "🇱",
			m: "🇲",	n: "🇳",	o: "🇴",	p: "🇵",
			q: "🇶",	r: "🇷",	s: "🇸",	t: "🇹",
			u: "🇺",	v: "🇻",	w: "🇼",	x: "🇽",
			y: "🇾",	z: "🇿",		
				"↑": "⬆️",		
			"←": "⬅️",		"→": "➡️",	
				"↓": "⬇️",		
		}
	},
	smallcaps: {
		meta: ["lower"],
		normal: {
			a: "ᴀ",	b: "ʙ",	c: "ᴄ",	d: "ᴅ",
			e: "ᴇ",	f: "ꜰ",	g: "ɢ",	h: "ʜ",
			i: "ɪ",	j: "ᴊ",	k: "ᴋ",	l: "ʟ",
			m: "ᴍ",	n: "ɴ",	o: "ᴏ",	p: "ᴘ",
			q: "ǫ",	r: "ʀ",	s: "ꜱ",	t: "ᴛ",
			u: "ᴜ",	v: "ᴠ",	w: "ᴡ",	x: "x",
			y: "ʏ",	z: "ᴢ",		
		},
	},
	dancing_moji: {
		meta: ["lower"],
		normal: {
			a: "<a:a:1284569298320490496>",
			b: "<a:b:1284569580437508139>",
			c: "<a:c:1284569699048493107>",
			d: "<a:d:1284569641393590305>",
			e: "<a:e:1284569729054539798>",
			f: "<a:f:1284569748499206144>",
			g: "<a:g:1284569772926828595>",
			h: "<a:h:1284569791926898749>",
			i: "<a:i:1284569820620132475>",
			j: "<a:j:1284569850693550185>",
			k: "<a:k:1284569864748400781>",
			l: "<a:l:1284569876593377343>",
			m: "<a:m:1284569907668979902>",
			n: "<a:n:1284569926878756997>",
			o: "<a:o:1284569951960829972>",
			p: "<a:p:1284569968494772224>",
			q: "<a:q:1284569996046893096>",
			r: "<a:r:1284570031421657119>",
			s: "<a:s:1284570048119312394>",
			t: "<a:t:1284570072593207376>",
			u: "<a:u:1284570088846135296>",
			v: "<a:v:1284570113168642233>",
			w: "<a:w:1284570124317098004>",
			x: "<a:x:1284570140876341348>",
			y: "<a:y:1284570169393287300>",
			z: "<a:z:1284570197759492197>",
			" ": EMOJIS.empty,
		}
	},
	mlg: {
		meta: [],
		normal: {
			"o": "0",
			words: {
				"what's up": "WOT UP M8",
				"my name is": "MY NAME IS",
				"hang out": "HOOK ME UP ON XBOX LIVE",
				"meet": "HOOK ME UP ON XBOX LIVE, GT: 420_YoloSwag_69",
				"I'm not lying": "IT'S NOT A VIRUS",
				"too cool": "GONE TOO FAR",
				"is too cool": "HAS GONE TOO FAR",

				"bad": "FUCKING",
				"better": "MORE SKILL THAN YOU",
				"for": "4",
				"girls": "M9",
				"good": "SKILL",
				"got": "GET",
				"guys": "M8",
				"jerk": "BITCH",
				"jerks": "BITCHES",
				"loser": "SCRUB",
				"losers": "SCRUBS",
				"swag": "SWEG",
				"the": "TEH",
				"to": "2",
				"truth": "NOT A VIRUS",
				"very": "MUCH",
				"wrecked": "REKTED",
				"you": "U",
			}
		}
	},
	segmented_numbers: {
		meta: [],
		normal: {
			1: "🯱",	2: "🯲",	3: "🯳",
			4: "🯴",	5: "🯵",	6: "🯶",
			7: "🯷",	8: "🯸",	9: "🯹",
				0: "🯰",	
		},
	},
	wingdings: {
		meta: [],
		normal: {

			1: "🗁",	2: "🗎",	3: "🗏",	//
			4: "🗐",	5: "\\🗄",	6: "⏳︎",	//
			7: "🖮",	8: "🖰",	9: "\\🖲",	//
				0: "🗀",		//

			A: "✌︎",	B: "🖏",	C: "👍︎",	D: "👎︎",
			E: "☜",	F: "☞",	G: "☝︎",	H: "🖗",
			I: "🖐︎",	J: "\\☺",	K: "😐︎",	L: "\\☹",
			M: "💣︎",	N: "🕱",	O: "\\🏳",	P: "🏱",
			Q: "\\✈",	R: "☼",	S: "🌢",	T: "\\❄",
			U: "🕆",	V: "✞",	W: "🕈",	X: "✠",
			Y: "\\✡",	Z: "\\☪",

			a: "♋︎",	b: "♌︎",	c: "♍︎",	d: "♎︎",
			e: "♏︎",	f: "♐︎",	g: "♑︎",	h: "♒︎",
			i: "♓︎",	j: "🙰",	k: "🙵",	l: "⚫︎",
			m: "🔾",	n: "\\◼",	o: "🞏",	p: "🞐",
			q: "❑",	r: "❒",	s: "🞟",	t: "⧫",
			u: "◆",	v: "❖",	w: "🞙",	x: "⌧",
			y: "⮹",	z: "⌘",

			":": "🖳",
			";": "🖴",
			"<": "🖫",
			"=": "🖬",
			">": "✇",
			"?": "✍︎",
			"@": "🖎",
			"[": "\\☯",
			"\\": "\\🕉",
			"]": "\\☸",
			"^": "♈︎",
			"_": "♉︎",
			"`": "♊︎",
			"{": "\\🏵",
			"|": "🏶",
			"}": "🙶",
			"~": "🙷",
			"'": "🕯️",
			"\u0081": "➀",	"\u0082": "➁",	"\u0083": "➂",
			"\u0084": "➃",	"\u0085": "➄",	"\u0086": "➅",
			"\u0087": "➆",	"\u0088": "➇",	"\u0089": "➈",
			"\u008a": "➉",	"\u0080": "🄋",	

			"\u008c": "➊",	"\u008d": "➋",	"\u008e": "➌",
			"\u008f": "➍",	"\u0090": "➎",	"\u0091": "➏",
			"\u0092": "➐",	"\u0093": "➑",	"\u0094": "➒",
			"\u0095": "➓",	"\u008b": "🄌",	

			"\u0096": "🙢",
			"\u0097": "🙠",
			"\u0098": "🙡",
			"\u0099": "🙣",
			"\u009a": "🙞",
			"\u009b": "🙜",
			"\u009c": "🙝",
			"\u009d": "🙟",
			"\u009e": "∙",
			"\u009f": "•",
			" ": "⬝",
			"¡": "⭘",
			"¢": "🞆",
			"£": "🞈",
			"¤": "🞊",
			"¥": "🞋",
			"¦": "🔿",
			"§": "\\▪",
			"¨": "🞎",
			"©": "🟁",
			"ª": "🟅",
			"«": "★",
			"¬": "🟋",
			"­": "🟏",
			"®": "🟓",
			"¯": "🟑",
			"°": "⯐",
			"±": "⌖",
			"²": "⯎",
			"³": "⯏",
			"´": "⯑",
			"µ": "✪",
			"¶": "✰",
			"·": "🕐︎",
			"¸": "🕑︎",
			"¹": "🕒︎",
			"º": "🕓︎",
			"»": "🕔︎",
			"¼": "🕕︎",
			"½": "🕖︎",
			"¾": "🕗︎",
			"¿": "🕘︎",
			"À": "🕙︎",
			"Á": "🕚︎",
			"Â": "🕛︎",
			"Ã": "⮰",
			"Ä": "⮱",
			"Å": "⮲",
			"Æ": "⮳",
			"Ç": "⮴",
			"È": "⮵",
			"É": "⮶",
			"Ê": "⮷",
			"Ë": "🙪",
			"Ì": "🙫",
			"Í": "🙕",
			"Î": "🙔",
			"Ï": "🙗",
			"Ð": "🙖",
			"Ñ": "🙐",
			"Ò": "🙑",
			"Ó": "🙒",
			"Ô": "🙓",
			"Õ": "⌫",
			"Ö": "⌦",
			"×": "⮘",
			"Ø": "⮚",
			"Ù": "⮙",
			"Ú": "⮛",
			"Û": "⮈",
			"Ü": "⮊",
			"Ý": "⮉",
			"Þ": "⮋",
			"ß": "🡨",
			"à": "🡪",
			"á": "🡩",
			"â": "🡫",
			"ã": "🡬",
			"ä": "🡭",
			"å": "🡯",
			"æ": "🡮",
			"ç": "🡸",
			"è": "🡺",
			"é": "🡹",
			"ê": "🡻",
			"ë": "🡼",
			"ì": "🡽",
			"í": "🡿",
			"î": "🡾",
			"ï": "⇦",
			"ð": "⇨",
			"ñ": "⇧",
			"ò": "⇩",
			"ó": "⬄",
			"ô": "⇳",
			"õ": "⬁",
			"ö": "⬀",
			"÷": "⬃",
			"ø": "⬂",
			"ù": "🢬",
			"ú": "🢭",
			"û": "🗶",
			"ü": "✓",
			"ý": "🗷",
			"þ": "🗹",
			"ÿ": ""
		}
	},
	scribble: {
		// from https://github.com/replaceitem/symbol-chat/blob/master/src/main/resources/assets/symbol-chat/symbol_fonts/big_scribble.json
		meta: ["upper"],
		normal: {
			" ": "　",				
			A: "卂",	B: "乃",	C: "匚",	D: "ᗪ",	
			E: "乇",	F: "千",	G: "Ꮆ",	H: "卄",	
			I: "丨",	J: "ﾌ",	K: "Ҝ",	L: "ㄥ",	
			M: "爪",	N: "几",	O: "ㄖ",	P: "卩",	
			Q: "Ɋ",	R: "尺",	S: "丂",	T: "ㄒ",	
			U: "ㄩ",	V: "ᐯ",	W: "山",	X: "乂",	
			Y: "ㄚ",	Z: "乙",		

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
		}
	},
	medieval: {
		meta: [],
		normal: {
			a: "𝔞",	b: "𝔟",	c: "𝔠",	d: "𝔡",
			e: "𝔢",	f: "𝔣",	g: "𝔤",	h: "𝔥",
			i: "𝔦",	j: "𝔧",	k: "𝔨",	l: "𝔩",
			m: "𝔪",	n: "𝔫",	o: "𝔬",	p: "𝔭",
			q: "𝔮",	r: "𝔯",	s: "𝔰",	t: "𝔱",
			u: "𝔲",	v: "𝔳",	w: "𝔴",	x: "𝔵",
			y: "𝔶",	z: "𝔷",

			A: "𝔄",	B: "𝔅",	C: "ℭ",	D: "𝔇",
			E: "𝔈",	F: "𝔉",	G: "𝔊",	H: "ℌ",
			I: "ℑ",	J: "𝔍",	K: "𝔎",	L: "𝔏",
			M: "𝔐",	N: "𝔑",	O: "𝔒",	P: "𝔓",
			Q: "𝔔",	R: "ℜ",	S: "𝔖",	T: "𝔗",
			U: "𝔘",	V: "𝔙",	W: "𝔚",	X: "𝔛",
			Y: "𝔜",	Z: "ℨ"
		},
		bold: {
			a: "𝖆",	b: "𝖇",	c: "𝖈",	d: "𝖉",
			e: "𝖊",	f: "𝖋",	g: "𝖌",	h: "𝖍",
			i: "𝖎",	j: "𝖏",	k: "𝖐",	l: "𝖑",
			m: "𝖒",	n: "𝖓",	o: "𝖔",	p: "𝖕",
			q: "𝖖",	r: "𝖗",	s: "𝖘",	t: "𝖙",
			u: "𝖚",	v: "𝖛",	w: "𝖜",	x: "𝖝",
			y: "𝖞",	z: "𝖟",

			A: "𝕬",	B: "𝕭",	C: "𝕮",	D: "𝕯",
			E: "𝕰",	F: "𝕱",	G: "𝕲",	H: "𝕳",
			I: "𝕴",	J: "𝕵",	K: "𝕶",	L: "𝕷",
			M: "𝕸",	N: "𝕹",	O: "𝕺",	P: "𝕻",
			Q: "𝕼",	R: "𝕽",	S: "𝕾",	T: "𝕿",
			U: "𝖀",	V: "𝖁",	W: "𝖂",	X: "𝖃",
			Y: "𝖄",	Z: "𝖅",
		}
	},
	cursive: {
		meta: [],
		normal: {
			A: "𝓐",	B: "𝓑",	C: "𝓒",	D: "𝓓",
			E: "𝓔",	F: "𝓕",	G: "𝓖",	H: "𝓗",
			I: "𝓘",	J: "𝓙",	K: "𝓚",	L: "𝓛",
			M: "𝓜",	N: "𝓝",	O: "𝓞",	P: "𝓟",
			Q: "𝓠",	R: "𝓡",	S: "𝓢",	T: "𝓣",
			U: "𝓤",	V: "𝓥",	W: "𝓦",	X: "𝓧",
			Y: "𝓨",	Z: "𝓩",

			a: "𝓪",	b: "𝓫",	c: "𝓬",	d: "𝓭",
			e: "𝓮",	f: "𝓯",	g: "𝓰",	h: "𝓱",
			i: "𝓲",	j: "𝓳",	k: "𝓴",	l: "𝓵",
			m: "𝓶",	n: "𝓷",	o: "𝓸",	p: "𝓹",
			q: "𝓺",	r: "𝓻",	s: "𝓼",	t: "𝓽",
			u: "𝓾",	v: "𝓿",	w: "𝔀",	x: "𝔁",
			y: "𝔂",	z: "𝔃",
		},
		bold: {
			A: "𝒜",	B: "𝐵",	C: "𝒞",	D: "𝒟",
			E: "𝐸",	F: "𝐹",	G: "𝒢",	H: "𝐻",
			I: "𝐼",	J: "𝒥",	K: "𝒦",	L: "𝐿",
			M: "𝑀",	N: "𝒩",	O: "𝒪",	P: "𝒫",
			Q: "𝒬",	R: "𝑅",	S: "𝒮",	T: "𝒯",
			U: "𝒰",	V: "𝒱",	W: "𝒲",	X: "𝒳",
			Y: "𝒴",	Z: "𝒵",

			a: "𝒶",	b: "𝒷",	c: "𝒸",	d: "𝒹",
			e: "𝑒",	f: "𝒻",	g: "𝑔",	h: "𝒽",
			i: "𝒾",	j: " 𝒿",	k: "𝓀",	l: "𝓁",
			m: "𝓂",	n: "𝓃",	o: "𝑜",	p: "𝓅",
			q: "𝓆",	r: "𝓇",	s: "𝓈",	t: "𝓉",
			u: "𝓊",	v: "𝓋",	w: "𝓌",	x: "𝓍",
			y: "𝓎",	z: "𝓏",
		}
	},
	flipped: {
		meta: ["reverse"],
		normal: {

			1:	"Ɩ",	2:	"Շ",	3:	"Ɛ",
			4:	"߈",	5:	"ϛ",	6:	"9",
			7:	"ㄥ",	8:	"8",	9:	"6",
					0:	"0",

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

			"!": "¡",
			",": "'",
			".": "˙",
			"?": "¿",
		},
	},
	fullwidth: {
		meta: [],
		normal: {
			" ": "　",
			a: "ａ",	b: "ｂ",	c: "ｃ",	d: "ｄ",
			e: "ｅ",	f: "ｆ",	g: "ｇ",	h: "ｈ",
			i: "ｉ",	j: "ｊ",	k: "ｋ",	l: "ｌ",
			m: "ｍ",	n: "ｎ",	o: "ｏ",	p: "ｐ",
			q: "ｑ",	r: "ｒ",	s: "ｓ",	t: "ｔ",
			u: "ｕ",	v: "ｖ",	w: "ｗ",	x: "ｘ",
			y: "ｙ",	z: "ｚ",

			A: "Ａ",	B: "Ｂ",	C: "Ｃ",	D: "Ｄ",
			E: "Ｅ",	F: "Ｆ",	G: "Ｇ",	H: "Ｈ",
			I: "Ｉ",	J: "Ｊ",	K: "Ｋ",	L: "Ｌ",
			M: "Ｍ",	N: "Ｎ",	O: "Ｏ",	P: "Ｐ",
			Q: "Ｑ",	R: "Ｒ",	S: "Ｓ",	T: "Ｔ",
			U: "Ｕ",	V: "Ｖ",	W: "Ｗ",	X: "Ｘ",
			Y: "Ｙ",	Z: "Ｚ",

			1: "１",	2: "２",	3: "３",
			4: "４",	5: "５",	6: "６",
			7: "７",	8: "８",	9: "９",
				0: "０",

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
let ctx = globalThis['ctx'] ?? discord.storage.user;
ctx.customtext ??= {};
const flag = (f) => args.find(arg => arg.startsWith("--"+f));
const getarg = (name) => {
	if (name == "face" && _face !== "") return {name: "--face", value: _face};
	const h = args.find(arg => arg.startsWith("--"+name+"="))?.split?.("=");
	if (!h) return undefined;
	return { name: h[0], value: h[1] };
}
function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceAllCaseInsensitive(string, find, replace) {
	const regex = new RegExp(escapeRegExp(find), "gi");
	return string.replace(regex, replace);
}
function fromEntries(entries) {
	// Object.fromEntries doesn't maintain order
	let newo = {};
	for (const entry of entries) {
		newo[entry[0]] = entry[1]
	}
	return newo
}
if (flag("export")) {
	ctx.customtext.escapeRegExp = escapeRegExp;
	ctx.customtext.replaceAllCaseInsensitive = replaceAllCaseInsensitive;
	ctx.customtext.fromEntries = fromEntries;
}
const convert = (text, face, bold=false, reverse=false) => {
	// * reverse - whether to unapply the face
	const Face = faces[face];
	if (!Face.bold) bold = false;
	if (Face?.meta?.includes?.("reverse")) text = [...text].reverse().join("")
	if (Face?.meta?.includes?.("upper")) text = text.toUpperCase()
	if (Face?.meta?.includes?.("lower")) text = text.toLowerCase()
	if (Face?.meta?.includes?.("invisSeparators")) text = [...text].join("​"); // <- there's an invisible character in that string
	let map = bold ? Face.bold : Face.normal;
	let words = map.words;
	delete map.words;

	if (reverse) {
		map = fromEntries(Object.entries(map).map(e=>e.reverse()))
		if (words) words = fromEntries(Object.entries(words).map(e=>e.reverse()))
	}


	if (words) for (const [origWords, newWords] of Object.entries(words)) {
		text = reverse ? text.replaceAll(origWords, newWords) : replaceAllCaseInsensitive(text, origWords, newWords);
	}
	for (const [origChar, newChar] of Object.entries(map)) {
		text = text.replaceAll(origChar, newChar)
	}
	return text;
}
const new_faces = {};
if (typeof ctx?.customtext?.overrides === "object") {
	for (const face of Object.keys(ctx.customtext.overrides)) {
		if (faces[face] === undefined) {
			faces[face] = ctx.customtext.overrides[face];
			new_faces[face] = faces[face];
		}
	}
}
if (flag("export")) ctx.customtext.convert = convert;

args = args.join(" ").split(" ");

const text = args.filter(arg => !arg.startsWith("--")).join(" ");

function make(args) {
	const maxWidthNames = args.flatMap(arg => arg[0])
		.reduce((r, name) => name.length > r ? name.length : r, 0)
	return args
		.map(arg => ` --${arg[0].padEnd(maxWidthNames)}  ${arg[1]}`)
		.join("\n")
}
if (flag("export")) ctx.customtext.makeArguments = make;

let [ tagPrefix, prefix, commandName, tagName ] = message?.content?.match?.(/^([^ ]{0,14} ?)(tag|t) ([^ ^\n]{0,})/i) || ["@Assyst#0384 tag <name>", "@Assyst#0384", " tag", "<name>"];
if (flag("help") || (args.length === 1 && args[0] === "")) {

	return OUT(`\`\`\`ansi\n[33mUsage:[39m ${tagPrefix} […arguments…] […query…]\n`+
		`[30mNote: […query…] could be anything that doesn't start with "--" (arguments start with that, they're split by space)[39m\n\n`+
		`[36mArguments:[39m\n${make([
			["help",	"shows this help message"	],
			["face",	"choose the version of the custom text"	],
			["faces",	"list available faces"	],
			["bold",	"uses the bold variant of the face (if available)"	],
			["export",	convert("advanced", "fullwidth", true)+"exports some of the internal functions to ctx.customtext"	],
			["undo",	"tries reversing applying the face"	]
		])}\n\n`+
		`[36mExamples: [39m\n`+
		[
			` ${tagPrefix} --faces`,
			` ${tagPrefix} --face=cursive hi this is some example idk`,
			` ${tagPrefix} --face=cursive another example but this will be bold --bold`,
			` ${tagPrefix} --face=cursive --bold you can also put this anywhere in the text`,
			` ${tagPrefix} --face=cursive if the word starts with --bold (the double dash) it's gonna be filtered out --hello`,
			` ${tagPrefix} --face=cursive Assyst --bold`,
			` ${tagPrefix} --face=medieval some medieval looking text`,
			` ${tagPrefix} --face=wingdings use the faces argument to see all of them`,
			` ${tagPrefix} --face=cursive --undo 𝓣𝓱𝓮 𝓫𝓪𝓵𝓵𝓼 𝓱𝓪𝓿𝓮 𝓼𝓹𝓸𝓴𝓮𝓷`,
		].join("\n")+"```");
}
const face = getarg("face");
function list(faces) {
	return Object.keys(faces)
	.map(face => 
		`- \`${face}\` = ${convert(text || face, face)}` + 
		(faces[face]["bold"] ? `\n- \`${face}\` --bold = ${convert(text || face, face, true)}` : "")
	)
	.join("\n")
}
if (flag("faces")) {
	const faces_with_overrides = {}
	for (const [name, value] of Object.entries(faces)) {
		faces_with_overrides[name] = value
	}
	if (ctx.customtext.new_faces) for (const [name, value] of Object.entries(new_faces)) {
		faces_with_overrides[name] = value
	}
	return OUT(`## Available faces:\n${list(faces_with_overrides)}`)
}
let mainTag = ["customtext", "ct"].includes(tagName)
if (!text) return OUT(`Please input some text${mainTag ? "to transform with a face" : ""}.\n`+
	`Example: \`${tagPrefix} ${mainTag ? `${flag("bold") ? "--bold " : ""}--face=${face?.value ?? "cursive"}` : ""} placeholder text\``);
if (!face)
	return OUT(`Please specify a \`face\` to use for the custom text.\n`+
		`Example: \`${tagPrefix} ${flag("bold") ? "--bold " : ""}--face=cursive ${text}\``);
if (!Object.keys(faces).includes(face.value))
	return OUT(`Unknown Face \`${face.value}\`. Please use one of the following: ${Object.keys(faces).join(", ")}.\n`+
		`Example: \`${tagPrefix} ${flag("bold") ? "--bold " : ""}--face=cursive ${text}\``);
if (!faces[face.value]["normal"])
	return OUT(`Face \`${face.value}\` doesn't have a normal variant.\n`);
if (!faces[face.value]["bold"] && flag("bold"))
	return OUT(`Face \`${face.value}\` doesn't have a bold variant.\n`);

return OUT(convert(text, face.value, flag("bold"), flag("undo")))
})()}}
