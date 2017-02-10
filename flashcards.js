"use strict"
// write your code here
const fs = require('fs')
const readline = require('readline');
const data = this.data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Model{
  constructor(){
    this.jawabanSalah = 0;
    this.nilai = 0;
    this.pertanyaan = 0;
}
    viewData(){
      rl.question('Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? G0!!', (answer) => {
          answer == ""? this.definition() : this.viewData()
      });
    }
    definition(){
      if(this.pertanyaan == data.length){
        console.log(`Tidak dapat menjawab pertanyaan ini sebanyak ${this.jawabanSalah}`);
        console.log(`Selesai, Nilai anda ${this.nilai}`);
        rl.close;
      }
      else{
        console.log(data[this.pertanyaan].definition);
        rl.question("Jawaban anda : ", (answer) => {
               console.log("Correct");
               if(answer.toLowerCase()==data[this.pertanyaan].term.toLowerCase()){
                 this.nilai+=10
                 this.pertanyaan++
                 this.definition()
               }else{
                 this.jawabanSalah++
                 console.log("Incorrect! Try again");
                 this.definition()
               }
           });
       }
   }
 }

let Models = new Model()
Models.viewData();
