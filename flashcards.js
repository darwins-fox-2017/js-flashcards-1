"use strict"
// write your code here
const fs = require('fs');
let obj = require('./data.json');
let data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ''
});

rl.prompt();
var x = 0
console.log(data[x].definition)
rl.on('line', (line) => {
  if (line.trim().toLowerCase() == data[x].term.toLowerCase()) {
      console.log('Selamat Jawaban kamu benar!');
      x+=1
      if (x < data.length) {
        console.log(data[x].definition)
      } else {
        console.log("Kamu Jago banget!")
        process.exit(0);
      }

  } else {
    console.log(`Jawaban '${line.trim()} masih salah nih!'`);
    console.log(data[x].definition)
  }
  rl.prompt();
}).on('close', () => {
  console.log('Yah cupu banget berhenti ditengah jalan!');
  process.exit(0);
});
