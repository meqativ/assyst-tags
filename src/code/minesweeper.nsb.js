{js:
const ntu = (value) => Number.isNaN(value) ? undefined : value;
const {generateMinesweeper} = {text:http://meqativ.github.io/assyst-tags/src/code/modules/Minesweeper.js};
{ignore:(async ()=>{

const OUT = (thing) => {console.log(thing); return thing}
if (globalThis['discord']) { // notsobot
	message = discord.message
	args = discord.variables.__args
}
const help = `**Usage:** ${message?.content?.match?.(/^([^ ]{0,14} ?)(tag|t) ([^ ^\n]{0,})/i)[0] || "</tag run:1267922331842511005> \`...\` arguments:"} \`{difficulty 1-[2]-5}\` \`{columns 1-[9]-inf}\` \`{rows 1-[9]-inf}\``
if (args[0] === "help") return OUT(help);
try {
    const {render, info} = generateMinesweeper({
        difficulty: ntu(parseInt(args[0])),
        rows: ntu(parseInt(args[1])),
        cols: ntu(parseInt(args[2])),
    });
    return OUT(help+"\n"+info+"\n"+render);
    
} catch (e) {
  return OUT(help+`\n# ❌ \`\`${e?.message??e}\`\``)
}
})()}}
