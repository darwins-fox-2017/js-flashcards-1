"use strict"

class Flashcard {
  constructor() {
    let fs = require('fs')
    this.data = JSON.parse(fs.readFileSync("data.json", "utf-8"))
  }

  promptData() {
    const readline = require('readline');
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
    let questionLine = 0
    let correct = 0
    let wrong = 0

    rl.setPrompt(this.data[questionLine].definition + " ")
    rl.prompt();
    rl.on('line', (line) => {
      if (Number(line) === this.data[questionLine].term) {
        console.log('Yak betul!');
        questionLine++
        console.log(questionLine)
        correct++
        console.log(`Jawaban Benar ${correct}`)
      } else {
        console.log('Salah!!!');
        wrong++
        console.log(`Jawaban Salah ${wrong}`)
      }
      if (questionLine < this.data.length) {
        rl.setPrompt(this.data[questionLine].definition + " ")
        rl.prompt();
      } else {
        rl.close()
      }
    }).on('close', ()=>{
      console.log(`Selamat Anda memenangkan permainan. Dapat #sayadisctv auwuwwwwwww`);
      process.exit(0)
    })
  }
}

let flashcard = new Flashcard()
flashcard.promptData()
