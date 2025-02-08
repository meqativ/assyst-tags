(()=>{
const c = (val, or = () => false) => typeof val !== "number" || Number.isNaN(val) || or(val);
const cStr = (val, or = () => false) => typeof val !== "string" || val.length < 1 || or(val);
const rng = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
const pickor = (arr) => Array.isArray(arr) ? arr[rng(0, arr.length-1)] : arr
function generateMinesweeper(config) {
    /*
    type ReturnValue = {
        board: Board; // board with the Configs.boom and Configs.defaultCells
        render: string; // board render with Configs.spoilers
        info: string; // example: `9` by `9` - `💣 18` / `🟦 81`
    };
    type Board = string[][];
    type Configs = {
        skipValidation: boolean; // do not validate passed configs (you need to pass EVERYTHING btw)
        spoilers: boolean; // whether to put spoilers around mines
        difficulty: number; // difficulty of the game (from 1 to 9)
        cols: number; // amount of columns (more than 0)
        rows: number; // amount of rows (more than 0)
        strs: {
            cell: string; // the empty cell emoji to use |
            mine: string; // the mine emoji to use       - used in the info string

            boom: string; // the emoji to use for the mines on the play field
            defaultCells: [string, string, string, string, string, string, string, string]; // emojis to use for the cells on the play field
        }
    };
    */
    config ??= {}; if (typeof config !== "object" || Array.isArray(config)) throw new Error("config argument must be an object");
    if (!config.skipValidation) (()=>{
        config.difficulty ??= 2; if (c(config.difficulty, (d) => d > 9 || d < 0)) throw new Error("Invalid difficulty");
        config.cols       ??= 9; if (c(config.cols,       (c) => c < 1         )) throw new Error("Invalid column amount");
        config.rows       ??= 9; if (c(config.rows,       (r) => r < 1         )) throw new Error("Invalid row amount");
        config.spoilers   ??= true;
        
        config.strs ??= {}; const strs = config.strs;
        strs.cell ??= "🟦"; if (cStr(strs.cell)) throw new Error("Invalid strs.cell");
        strs.mine ??= "💣"; if (cStr(strs.mine)) throw new Error("Invalid strs.mine");
        strs.boom ??= "💥"; if (cStr(strs.boom, (e)=>eArray.isArray(e))) throw new Error("Invalid strs.boom");
        
        const defaultCells = [ "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"/*, "9️⃣", "🔟" :trolleyzoom: */ ];
        strs.cells ??= defaultCells;
        if (!Array.isArray(strs.cells)) throw new Error("Cells must be an array of strings to represent the cell as");
        for (let i = 0; i < defaultCells.length; i++) {
            strs.cells[i] ??= defaultCells[i];
            if (cStr(strs.cells[i])) throw new Error(`strs.cells[${i}] invalid`);
        }
        //if (strs.cells.length > defaultCells.length) "lol"
    })();
    
    let cellCount = config.rows * config.cols,
        mineCount = Math.floor(config.difficulty / 9 * 100 / 100 * cellCount),
        board = [];
     
    for (var i = 0; i < config.rows; i++) {
        board.push([]);
        for (var ii = 0; ii < config.cols; ii++) {
            board[i][ii] = 0;
        }
    }

    let placedMines = 0;
    while (placedMines < mineCount) {
        let row = Math.floor(Math.random() * config.rows),
            col = Math.floor(Math.random() * config.cols);

        if (board[row][col] === 0) {
            board[row][col] = config.strs.boom;
            placedMines++;
        }
    }

    for (let row = 0; row < config.rows; row++) {
        for (let col = 0; col < config.cols; col++) {
            if (board[row][col] === pickor(config.strs.boom)) continue;

            let numAdjacentMines = 0;
            for (let i = -1 ; i <= 1; i++) {
                for (let ii = -1 ; ii <= 1; ii++) {
                    if (i === 0 && ii === 0) continue;

                    let adjacentRow = row + i, adjacentCol = col + ii;
                    if (
                        adjacentRow >= 0   &&
                        adjacentRow < config.rows &&
                        adjacentCol >= 0   &&
                        adjacentCol < config.cols &&
                        board[adjacentRow][adjacentCol] === pickor(config.strs.boom)
                    ) numAdjacentMines++;
                }
            }

            board[row][col] = config.strs.cells[numAdjacentMines];
        }
    }
    
    return {
        board,
        render: board.reduce((r,v,i) => r+(i===0?"":"\n")+v.reduce((r,v) => r+(config.spoilers ? `||${v}||` : v), ""),""),
        info: `\`${config.cols}\` by \`${config.rows}\` - \`${pickor(config.strs.mine)} ${mineCount}\` / \`${config.strs.cell} ${cellCount}\``,
        cellCount, mineCount
    };
} // thanks @x8s on discord for logic impl (https://discord.com/users/218327212535840768)

return {generateMinesweeper};
})()
