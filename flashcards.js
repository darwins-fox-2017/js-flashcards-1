"use strict"
// write your code here
let jsonfile = require('jsonfile')
let readline = require('readline')
var readlineSync = require('readline-sync');

class Model {
  constructor() {
    this.fileName = 'data.json'
    this.questionList = []
  }

  parseFile(){
    debugger
    this.questionList = jsonfile.readFileSync(this.fileName)
  }

  writeToFile(){
    jsonfile.writeFileSync(this.fileName, this.todoList)
  }

  getQuestion(index){
    return this.questionList[index].definition
  }

  getAnswer(index){
    return this.questionList[index].term
  }

  get question(){
    // console.log(this.questionList[index]);
    // return this.questionList[index].definition
  }

  get answer(){
    // console.log(this.questionList[index].term);
    // return this.questionList[index].term
  }

  get lengthOfQuestions(){
    return this.questionList.length
  }
}

class View {
  constructor() {

  }

  showQuestion(questionList, index){
    console.log(questionList[index].definition);
  }

  wrongAnswer(){
    console.log(`Jawaban mu salah, Sis! Coba lagi yak!`);
  }

  correctAnswer(){
    console.log(`Jawaban kamu benar, Sis!`);
  }

  welcomeMessage(){
    console.log('----==== Selamat datang di Game Flash Card ===-----');
  }

  greating(){
    console.log('-----------------------');
    console.log('Selamat kamu menang, Sis!');
  }
}

class Controller {
  constructor() {
    this.model = new Model()
    this.view = new View()
    this.arguments = process.argv
  }

  init(){
    this.model.parseFile()
    this.view.welcomeMessage()

    let index = 0
    do {
      let answer = readlineSync.question(this.model.getQuestion(index));
      if (answer.toLowerCase() == this.model.getAnswer(index).toLowerCase()) {
        this.view.correctAnswer()
        index++
      } else {
        this.view.wrongAnswer()
      }
    } while (index < this.model.lengthOfQuestions);

    this.view.greating()
  }
}

let playMVC = new Controller()
playMVC.init()
