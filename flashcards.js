"use strict"
// write your code here
let jsonfile = require ('jsonfile')
const readline = require('readline')
const argv = process.argv



class Models{
  constructor(){
    this.data = jsonfile.readFileSync('data.json')
  }
}

class Views{
  constructor(){

  }

  opening(){
    console.log(`\nWelcome to JS Flash Cards. You are using the deck 'data.json'\nTo play, just enter the correct term for each definition\n`);
  }

  closing(){
    console.log(`Thank you for playing, have a nice day`);
  }

  definition(){
    return `Definition : `
  }

  correctAnswer(){
    console.log(`Correct! `);
  }

  incorrectAnswer(){
    return `Incorrect! tryagain `
  }

  guess(){
    return `Guess: `
  }
}

class Controllers{
  controller(){

  }

  start(){
    let view = new Views()
    let questions = new Models()
    let i = 0
    const rl = readline.createInterface({
      input : process.stdin,
      output : process.stdout
    });

    view.opening()
    rl.setPrompt(view.definition()+ ` ${questions.data[i].definition}\n\n` + view.guess())

    rl.prompt();

    rl.on('line', (answer) => {
      if(i+1<questions.data.length){
        switch (answer.trim().toUpperCase()) {
          case questions.data[i].term.toUpperCase():
            view.correctAnswer()
            i++
            rl.setPrompt(`\n` + view.definition()+ ` ${questions.data[i].definition}\n\n` + view.guess())
            rl.prompt()
            break;
          default:
            view.incorrectAnswer()
            rl.prompt()
        }
      }else {
        rl.close()
      }
    }).on('close', () => {
      view.closing()
      process.exit(0);
    });

  }


}

let data = new Models()
let view = new Views()
let control = new Controllers()

control.start()
