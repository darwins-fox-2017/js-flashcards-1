"use strict"
// write your code here

const fs = require('fs')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

class Flashcard {
  constructor() {

  }

  run() {
    console.log(`Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!`);

    var i = 0;
    var rightAns = 0;
    var wrongAns = 0

    rl.setPrompt(`${data[i].definition} : `)
    rl.prompt()

    rl.on('line',(answer)=> {
      if (i == data.length-1){
        rl.close()
        // console.log(data.length);
        console.log(`Jawaban benar sebanyak : ${rightAns +1} dari ${data.length} pertanyaan`);
        console.log(`============================================`);
        console.log(`Selamat jawaban anda benar semua`);
        console.log(`============================================`);
      } else if (answer.toLowerCase() == data[i].term.toLowerCase()) {
        console.log(`Correct!`);
        i++
        rightAns++
        console.log(`Jawaban benar sebanyak : ${rightAns} dari ${data.length} pertanyaan`);
        console.log(`============================================`);
        rl.setPrompt(`${data[i].definition} : `)
        rl.prompt()
      } else if(answer.toLowerCase() != data[i].term.toLowerCase()){
        console.log(`Incorrect! Try again`);
        wrongAns++
        console.log(`jawaban anda salah : ${wrongAns}`);
        console.log(`============================================`);
        rl.setPrompt(`${data[i].definition} : `)
        rl.prompt()
      }
    })
  }
}

let play = new Flashcard()
play.run()
