import * as readline from 'readline'

export class View {
  constructor() {
    this.readline = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'OHAI> '
    })
  }
  
  static showMessage(message) {
    this.readline.prompt()
  }

  static getInput() {

  }


}
