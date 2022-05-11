const axios = require('axios');
const fs = require('fs');

const file1 = fs.readFileSync('./1.mp3');

for(let i=2; i<49; i++){
    fs.writeFile(`${i}.mp3`, file1, {}, ()=>{});
}

// for(let i=1; i<47;i++){
//     axios.get(`https://cdn.jsdelivr.net/gh/liulei237136/511/1 - 副本 (47).mp3`)
// }