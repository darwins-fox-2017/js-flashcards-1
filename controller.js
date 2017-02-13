import Model from './model.js'
import View from './view.js'

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Controller {
  constructor() {
    this.model = new Model('data.json')
    this.skip = []
    this.question = null
  }

  play() {
    let position = 0
    let totalWrong = 0
    rl.setPrompt(View.welcome_message() + '\n')
    rl.prompt()


    rl.on('line', (answer) => {
      if(answer == "start") {

        //mulai dari 1, show question yang no 1
        // rl.setPrompt(this.model.question(position)['definition'] + `: `)
        // rl.prompt()
        //
        // rl.on('line', (answer) => {
        //   if (position == 5) {
        //     console.log(`Selamat, jawaban anda betul semua, silahkan ambil hadiah dari Enci`);
        //     rl.close()
        //   }
        //
        //   if(answer.toLowerCase() == this.model.question(position)['term'].toLowerCase()) {
        //     console.log('Correct');
        //     position++
        //     totalWrong = 0
        //     rl.setPrompt(this.model.question(position)['definition'] + `: `)
        //     rl.prompt()
        //   } else {
        //     totalWrong++
        //     console.log(`total salah: ${totalWrong}`);
        //     console.log('Salah coy,, coba lagi ya');
        //     rl.setPrompt(this.model.question(position)['definition'] + `: `)
        //     rl.prompt()
        //   }
        // })
        this.question = this.model.question()
        this.showQuestion()

      }
    })
  }

  showQuestion(position=0) {
    var total_wrong = 0
    if(!this.question[position]) {
      console.log(View.finish_message())
      rl.close()
      return false
    }

    rl.setPrompt(this.question[position]['definition'] + `: `)
    rl.prompt()

    rl.on('line', (answer) => {
      if(answer.toLowerCase() == this.question[position]['term'].toLowerCase()){
        console.log(View.correct_message())
        position = position+1
        total_wrong = 0

        if(this.question[position]) {
          rl.setPrompt(this.question[position]['definition'] + `: `)
          rl.prompt()
        } else {  //if question empty
          console.log('----question empty');

          if(this.skip.length) {
            this.question = this.skip
            this.skip = []
            position = 0
            rl.setPrompt(this.question[position]['definition'] + `: `)
            rl.prompt()
          } else {
            console.log(View.finish_message());
            rl.close()
          }
         }
      } else if (answer.toLowerCase() == 'skip') {
        this.skip.push(this.question[position])
        position = position+1
        if(this.question[position]) {
          rl.setPrompt(this.question[position]['definition'] + `: `)
          rl.prompt()
        }
      } else {
        total_wrong++
        console.log(`sudah salah sebanyak ${total_wrong}`);
        rl.prompt()
      }
    })
  }

  // print() {
  //   console.log(this.model[1]);
  // }
}

var controller = new Controller('data.json');
controller.play()
// controller.print()
