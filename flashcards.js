"use strict"
// write your code here
const fs = require('fs')
var dataFile = JSON.parse(fs.readFileSync('data.json', 'UTF-8'))

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Wellcome to JS flash Card. To play, just enter the correct term for each definition. \n' +
    'Ready ?? Press enter to start!');

let i = 0
console.log(dataFile[i]['defini(tion']);
rl.on('line', (line) => {
  if (i == dataFile.length){
        rl.close()
      }
  else if (line === dataFile[i]['term']) {
      i++
        console.log(`${dataFile[i]['definition']}`);
        rl.prompt()
    }
  else {
        console.log(`Your inout ${line} is false!`);
        rl.prompt()
    }

      });

// let i = 0
// console.log(`${dataFile[i]['definition']}\n\nJawaban : \n`)
// rl.prompt();
