const fs = require('fs')

class Model {
  constructor(path) {
    this.path = path
    this.data = JSON.parse(fs.readFileSync(this.path,'utf-8'))
  }

  question() {
    return this.data
  }
}

// export class
// tulis jangan pakai 's'
export default Model
