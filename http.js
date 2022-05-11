const axios = require('axios');
const fs = require('fs');

if (fs.existsSync('./log.txt')) {
    fs.unlinkSync('./log.txt');

}
fs.writeFileSync('./log.txt', '');


for (let j = 0; j < 1; j++) {
    for (let i = 1; i <= 52; i++) {
        axios.head(`https://cdn.jsdelivr.net/gh/liulei237136/511/${i}.mp3`)
            .then(() => {
                // console.log(`${i}.mp3 can access`);
            })
            .catch((err) => {
                // console.log(`第${j}遍第${i}次出错`);
                // console.log(err.message);
                fs.appendFile('./log.txt', `第${j}遍第${i}次出错\n`, ()=>{});
                fs.appendFile('./log.txt', `${err.code}  ${err.message}`, ()=>{});
            })
    }
}