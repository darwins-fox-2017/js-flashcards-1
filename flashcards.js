"use strict"
// write your code here
//var readline = require('readline-sync');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Model {
    constructor(fileName) {
        this._fileName = fileName;
    }
    //membaca data di dalam file
    readFile() {
        let fs = require('fs');
        let data = fs.readFileSync(this._fileName).toString();
        if (data.toString()) {
            data = JSON.parse(data);
        } else {
            data = [];
        }
        return data;
    }
}

class View {
    constructor(data) {
        this._data = data;
    }

    viewQuestion(index,answer) {
        //console.log(this._data);
        //var answer = readline.question(`${this._data[index].definition} ? `);
        if (answer.toLowerCase() == this._data[index].term.toLowerCase()) {
            console.log('jawaban anda benar');
        } else {
            console.log('jawaban anda salah')
        }
    }
}

class controler {
    constructor() {
        this._model = new Model('data.json');
        this._data = this._model.readFile();
        this._view = new View(this._data);
    }

    run() {
      let i=0;
      console.log(this._data[i].definition);
        rl.on('line', (answer) => {
          if (  this._data[i].term.toLowerCase() == answer.toLowerCase()) {
            console.log('jawaban benar');
            i++
          }else {
            console.log('jawaban salah');
            i++
          }
        console.log(this._data[i].definition);
        if (i>=this._data.length-1) {
          console.log('permainan selesai');
          rl.close();
        }

        });

    }

}

let run = new controler();
run.run();
