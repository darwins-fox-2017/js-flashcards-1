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
rl.setPrompt(`${dataFile[i]['definition']} \n `);
rl.prompt()
rl.on('line', (line) => {
    if (line === dataFile[i]['term'].toLowerCase()) {
        i++
        if (i < dataFile.length) {
            rl.setPrompt(`${dataFile[i]['definition']} \n`);
            rl.prompt()
        }
        else{
          rl.close()
        }
    } else {
        console.log(`Your input ${line} is false!`);
        rl.prompt()
    }

}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});

// let i = 0
// console.log(`${dataFile[i]['definition']}\n\nJawaban : \n`)
// rl.prompt();
