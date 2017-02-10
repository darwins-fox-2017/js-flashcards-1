import * as fs from 'fs'

export class Model {
  constructor(file) {
    this.file = file
  }

  getData(err, data) {
    let dataJson = JSON.parse(data)
    return dataJson
  }

  readData(callback) {
      fs.readFile(this.file, 'utf8', callback)
  }

}
