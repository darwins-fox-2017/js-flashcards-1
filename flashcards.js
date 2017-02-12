"use strict"
// write your code here
import * as readline from 'readline'
import * as fs from 'fs'

class Flashcards {
  constructor(file) {
    this.file            = file
    this.currentQuestion = 0
    // this.trueAnswer      = 0
    // this.wrongAnswer     = 0
    this.questionRemain  = this.readData().getParseData().length
    this.data            = this.readData().getParseData()
  }

  welcomeScreen() {
    console.log('Welcome to JS Flash Cards. To plat, just enter the correct term for each definition. Ready? Go!')
  }

  readData() {
    this.data = fs.readFileSync(this.file, 'utf8')
    return this
  }

  getParseData() {
    return JSON.parse(this.data)
  }

  flash() {
    this.welcomeScreen()
    let rl = readline.createInterface({
      input : process.stdin,
      output: process.stdout,
    })

    rl.setPrompt('\nDefinition\n'+this.data[this.currentQuestion].definition+'\nGuess: ')
    rl.prompt()

    rl.on('line', (line) => {
      // let jsonCards = this.readData().getParseData()
      if (this.questionRemain > 0) {
        // rl.setPrompt('Guess: ')
        if (this.data[this.currentQuestion].term.toLowerCase() === line.toLowerCase()) {
          console.log('Correct!')
          this.currentQuestion++
          this.trueAnswer++
          this.questionRemain--
          if (this.questionRemain < 1) {
            rl.close()
          }
          rl.setPrompt('\nDefinition\n'+this.data[this.currentQuestion].definition+'\nGuess: ')
          rl.prompt()
        } else {
          console.log('Incorrect! Try again.')
          rl.prompt()
          this.wrongAnswer++
        }
      }
    }).on('close', () => {
      console.log('The game has finished. Have a great day!')
      process.exit(0)
    })
  }
}

let flashCards = new Flashcards('data.json')
flashCards.flash()
