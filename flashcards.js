"use strict"
// write your code here
const fs        = require('fs')
const readline  = require('readline')

//Model
class Model {
  constructor(data) {
    this.data   = data
  }

  getData() {
    return JSON.parse(fs.readFileSync(this.data, "utf-8"))
  }
}

//View
class View {
  static menuView() {
    console.log('::           Welcome to JS Flash Cards           ::\nTo play, just enter the correct term for each definition.\nReady? Go!');
  }

  static questionView(x){
    return `\nDefinition\n${x}\nGuess: `
  }

  static correctView() {
    console.log('Great! Das beste!');
  }

  static incorrectView() {
    console.log('Oh, no! Try again!');
  }

  static winnerView() {
    console.log("\nCongratulation! You're the best! Das beste!\n");
  }
}

//Controller
class Controller {
  constructor(input) {
    this.model  = new Model(input)
    this.json   = this.model.getData()
    this.count  = 0
    this.rl     = readline.createInterface({
      input   : process.stdin,
      output  : process.stdout
    })
  }

  // QUESTION
  question(x) {
    this.rl.setPrompt(x)
    this.rl.prompt()
  }

  play() {
    let rl = this.rl
    View.menuView()
    this.question(View.questionView(this.json[this.count].definition))

    rl.on('line', (answer) => {
      if ((this.count+1) < (this.json.length)) {
        if (answer.trim().toLowerCase() === this.json[this.count].term.toLowerCase()) {
          this.correct()
        } else {
          this.incorrect()
        }
      } else {
        this.win()
      }
    })
   }

  correct() {
    View.correctView()
    this.count++
    this.question(View.questionView(this.json[this.count].definition))
  }

  incorrect() {
    View.incorrectView()
    this.rl.prompt()
  }

  win() {
    View.winnerView()
    this.rl.close()
  }
}

let input   = "data.json"
const controller = new Controller(input)
controller.play()
