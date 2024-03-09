{js:
const ntu = (value) => Number.isNaN(value) ? undefined : value;
const \{generateMinesweeper\} = {download: http://meqativ.github.io/assyst-tags/src/code/modules/Minesweeper.js };
{ignore:(async ()=>{

const help = `**Usage:** ${message?.content?.match?.(/^([^ ]{0,14} ?)(tag|t) ([^ ^\n]{0,})/i)[0] || "@Assyst#0384 tag <name>"} \`{difficulty 1-[2]-5}\` \`{columns 1-[9]-inf}\` \`{rows 1-[9]-inf}\``
if (args[0] === "help") return help;
try {
    const {render, info} = generateMinesweeper({
        difficulty: ntu(parseInt(args[0])),
        rows: ntu(parseInt(args[1])),
        cols: ntu(parseInt(args[2])),
        strs: {
            boom: "<:uroCry:1215252683938603059>"
        }
    });
    return help+"\n"+info+"\n"+render;
    
} catch (e) {
  return help+`\n# ❌ \`\`${e?.message??e}\`\``
}
})()}}
