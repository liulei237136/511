const fs = require('fs');

const file1 = fs.readFileSync('./1.mp3');

for(let i=51; i<=52; i++){
    fs.writeFile(`${i}.mp3`, file1, {}, ()=>{});
}