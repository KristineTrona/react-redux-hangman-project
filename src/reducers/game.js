import {NEW_GAME, MAKE_GUESS, UPDATE_COUNT} from '../actions/game'

const reducer = (state = {word: "", guesses:[], wrongGuesses: 0, }, action = {}) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        word: action.payload.word}
    case MAKE_GUESS:
      return{
        ...state,
        guesses: [...state.guesses, action.payload]
      }
    case UPDATE_COUNT:
      return{
        ...state,
        guesses: [...state.guesses],
        wrongGuesses: action.payload
      }
    default:
      return state
  }
}

export default reducer