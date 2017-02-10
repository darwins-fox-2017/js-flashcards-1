import {Model} from '../models/model'
import {View} from '../views/view'
import * as readline from 'readline'

class Controller {
  constructor() {
    this.model = new Model('../data.json')
    this.view = View
  }

  quizUp() {
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'Welcome to JS Flash Cards. To plat, just enter the correct term for each definition. Ready? Go!'
    })

    rl.prompt()

    rl.on('line', (line) => {
      let jsonCards = this.model.readData().getParseData()
      rl.prompt()
    }).on('close', () => {
      console.log('Have a great day!')
      process.exit(0)
    })
  }
}

let controller = new Controller()

controller.quizUp()


// controller.model.readData((err, data) => {
//
// })
// controller.view.showMessage('tes')
