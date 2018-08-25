const {randomWord, showGuess} = require( '../lib/game')


export const NEW_GAME = 'NEW_GAME' 
export function newGame() {
    return {
      type: NEW_GAME,
      payload: {
        word: randomWord(),
        //guesses: []},
        //guessedWord: showGuess(this.word,this.guesses),
    }
  }
}

export const MAKE_GUESS = "MAKE_GUESS"
export function makeGuess(){
    return{
        type: MAKE_GUESS,
        payload:{}
    }
}




console.log(newGame())