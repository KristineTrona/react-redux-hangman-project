const {randomWord} = require( '../lib/game')

const random = randomWord()

export const NEW_GAME = 'NEW_GAME' 
export function newGame() {
    return {
      type: NEW_GAME,
      payload: {
        word: random,
        guesses: []}
    }
  }


export const MAKE_GUESS = "MAKE_GUESS"
export function makeGuess(){
    return{
        type: MAKE_GUESS,
        payload: {}
    }
}