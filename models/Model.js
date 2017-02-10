import * as fs from 'fs'

export class Model {
  constructor(file) {
    this.file = file
    this.data
  }

  readData() {
    this.data = fs.readFileSync(this.file, 'utf8')
    return this
  }

  getParseData() {
    return JSON.parse(this.data)
  }

}
// let mod = new Model('../data.json')
// mod.readData()
// console.log(mod.data)
