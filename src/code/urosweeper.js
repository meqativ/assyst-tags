{js:
let more = "";
const ntu = (value) => Number.isNaN(value) ? undefined : value;
const \{generateMinesweeper\} = {download: http://87.244.131.254:4200/code/modules/Minesweeper.js };
{ignore:(async ()=>{

const help = `**Usage:** ${message?.content?.match?.(/^(.+)? ?(tag|t) ([^ ^\n]+)/)[0] || "-t <tagname>"} \`{difficulty 1-[2]-5}\` \`{columns 1-[9]-inf}\` \`{rows 1-[9]-inf}\``
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
    more = info;
    return info+"\n"+render;
    
} catch (e) {
  more = help;
  return info+`\n# ❌ \`\`${e?.message??e}\`\``
}
})()}}
