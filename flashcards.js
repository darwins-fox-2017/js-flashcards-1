"use strict"
let fs = require("fs")
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// write your code here

class flashCards {
  constructor(cards) {
    this.card = cards['definition']
    this.term = cards['term']
    this.answer = false
  }
}

// Model
class Model {
  constructor() {
    this._data = []
  }

  get data() {

    if(this._data.length === 0) {
      let dataFile = JSON.parse(fs.readFileSync("data.json", "utf-8"))
      for(let i = 0; i<dataFile.length; i++) {
        let card = new flashCards(dataFile[i])
        this._data.push(card)
      }
    }
    return this._data
  }

}

class View {
  constructor() {

  }
  viewAnswer(data) {
    for(let i = 0; i<data.length; i++) {
      console.log(`- Pertanyaan : ${data[i].card}`)
      console.log(`- Jawaban : ${data[i].term} \n`)
    }
  }
  finish() {
    console.log("\nAnda telah menjawab dengan benar.")
  }

  setQuestion(data) {
    rl.setPrompt(`\n${data.card} ? `)
  }

  jawabanBenar() {
    console.log("- Jawaban anda benar")
  }

  jawabanSalah() {
    console.log("-  This question is too easy you dumb fuck")
  }

  starts(data) {

  }


}// tutup class view

//Controller
class Controller {

  constructor() {
    this.model = new Model()
    this.view = new View()
  }
  viewAnswer() {
    this.view.viewAnswer(this.model.data)
  }
  start() {
    // this.view.starts(this.model.data)
    let i = 0;
    // this.model.data
    // console.log(this.model.data)
    this.view.setQuestion(this.model.data[i])
    rl.prompt()
    rl.on('line', (input) => {
      if(this.model.data[i].term.toLowerCase() == input.toLowerCase()) {
        this.view.jawabanBenar()
        i++
      } else {
        this.view.jawabanSalah()
      }

      if(i == this.model.data.length) {
        rl.close()
        this.view.finish()
      } else {
        this.view.setQuestion(this.model.data[i])
        rl.prompt()
      }
    })

  }

} // end Controller Class

let mvc = new Controller()

mvc.start()
