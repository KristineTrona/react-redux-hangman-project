const {randomWord, wrongGuessCount} = require( '../lib/game')

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
export function makeGuess(guess){
    return{
        type: MAKE_GUESS,
        payload: guess
    }
}

export const UPDATE_COUNT = "UPDATE_COUNT"
export function updateCount(word, guesses){
  return{
      type: UPDATE_COUNT,
      payload: 5 //wrongGuessCount(word, guesses)
      
  }
}