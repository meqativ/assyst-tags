{js:
const ntu = (value) => Number.isNaN(value) ? undefined : value;
const \{generateMinesweeper\} = {download: http://meqativ.github.io/assyst-tags/src/code/modules/Minesweeper.js };
let overrides{get:overrides}; // <- js(on) object
{ignore:(async ()=>{

const help = `**Usage:** ${message?.content?.match?.(/^([^ ]{0,14} ?)(tag|t) ([^ ^\n]{0,})/i)[0] || "</tag run:1267922331842511005> \`...\` arguments:"} \`{difficulty 1-[2]-5}\` \`{columns 1-[9]-inf}\` \`{rows 1-[9]-inf}\``
if (args[0] === "help") return help;
try {
    if (!(typeof overrides === "object")) overrides = {};
    const {render, info} = generateMinesweeper({
        difficulty: ntu(parseInt(args[0])),
        rows: ntu(parseInt(args[1])),
        cols: ntu(parseInt(args[2])),
        ng: args.join(" ").includes("--no-guessing"),
        ... overrides
    });
    if (args.join(" ").includes("--plain")) return render
    return help+"\n"+info+"\n"+render;
    
} catch (e) {
  return help+`\n# ❌ \`\`${e?.message??e}\`\``
}
})()}}
