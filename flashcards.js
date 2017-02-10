"use strict"
const fs       = require('fs')
const readline = require ('readline')

const file     = 'data.json'
const readFile = fs.readFileSync(file, "utf-8")
const question = JSON.parse(readFile)

const rl = readline.createInterface({
  input : process.stdin,
  output: process.stdout
});

console.log(`Welcome to JS FLASH CARD. To play, just enter the correct term for each definition. Ready ? GO ! \n`);

let index = 0
rl.setPrompt(`${question[index].definition} ?\nJawaban :`)
rl.prompt()

rl.on('line', (answer) => {
  switch (answer.trim().toUpperCase()) {
    case question[index].term.toUpperCase():
        console.log(`correct answer`);
        index++
        break;
    default:
        console.log(`wrong answer!`);
        break;
  }

  if (index == question.length) {
    rl.close()
  }else {
    rl.setPrompt(`${question[index].definition} ?\nJawaban :`)
    rl.prompt()
  }
}).on('close', () => {
  console.log(`Have a great day!`);
  process.exit(0)
})
