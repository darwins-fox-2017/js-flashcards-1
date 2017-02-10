"use strict"
// write your code here
import * as readline from 'readline'
import * as fs from 'fs'

class Flashcards {
  constructor(file) {
    this.file = file
    this.currentQuestion = 0
    this.trueAnswer = 0
    this.wrongAnswer = 0
    this.questionRemain = this.readData().getParseData().length
    this.data = this.readData().getParseData()
    // this.welcomeScreen()
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
      input: process.stdin,
      output: process.stdout,
      // prompt: 'Welcome to JS Flash Cards. To plat, just enter the correct term for each definition. Ready? Go!'
    })

    // rl.prompt()

    rl.on('line', (line) => {
      // let jsonCards = this.readData().getParseData()
      if (this.questionRemain > 0) {
        this.getQuestion()
        // rl.setPrompt('Guess: ')
        if (this.data[this.currentQuestion].term === line) {
          console.log('Correct!')
          this.currentQuestion++
          this.trueAnswer++
          rl.prompt()
        } else {
          console.log('Incorrect! Try again.')
          rl.prompt()
          this.wrongAnswer++
        }
      }
    }).on('close', () => {
      console.log('Have a great day!')
      process.exit(0)
    })
  }

  getQuestion(questionIndex) {
    console.log('Definition')
    console.log(this.data[this.currentQuestion].definition)
  }

}

let flashCards = new Flashcards('data.json')
flashCards.flash()
