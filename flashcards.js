"use strict"
// write your code here
class Model {
	constructor() {
		let fs = require('fs')
		this.data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
	}

	tampilData() {
		let salah = 0
		let benar = 0
		let skor = 0
		let soalno = 0
		console.log("Welcome to JS Flash Cards. To play, just enter the correct term!")
		const readline = require('readline');
		const rl = readline.createInterface({
		  input: process.stdin,
		  output: process.stdout,
		  prompt: 'Jawab :> '
		});
		rl.setPrompt(this.data[soalno].definition + "\n")
		rl.prompt()
		rl.on('line', (jawaban) => {
			if(jawaban.toLowerCase() === this.data[soalno].term.toLowerCase()) {
				console.log(`${jawaban} benar!`)
				soalno++
				benar++
				if(soalno < this.data.length) {
					rl.setPrompt(this.data[soalno].definition + "\n")
					rl.prompt()		
				} else {
					rl.close()
					console.log(`Selamat anda benar : ${benar} dan salah : ${salah}`)
				}
			} else {
				console.log(`${jawaban} salah!`)
				salah++
				rl.prompt()
			}			
		}) 
	}
}

// class View {
// 	constructor() {

// 	}
// }

// class Controller {
// 	constructor() {

// 	}

// }

let dataModel = new Model()
dataModel.tampilData()
