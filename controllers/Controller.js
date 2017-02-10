import {Model} from '../models/model'
import {View} from '../views/view'

class Controller {
  constructor() {
    this.model = new Model('data.json')
    this.view = View
  }

  quizUp() {

  }
}

let controller = new Controller()

controller.model.readData((err, data) => {

})
controller.view.showMessage('tes')
