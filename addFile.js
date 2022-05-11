const fs = require('fs');

const file1 = fs.readFileSync('./1.mp3');

for(let i=53; i<=60; i++){
    fs.writeFile(`${i}.mp3`, file1, {}, ()=>{});
}