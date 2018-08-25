import {NEW_GAME, MAKE_GUESS} from '../actions/game'


const reducer = (state = {word: "", guesses:[], wrongGuesses: 0, }, action = {}) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        word: action.payload.word,
        guesses: action.payload.guesses}
    case MAKE_GUESS:
      return{
        ...state,
        guesses: [...state.guesses, action.payload]
      }
    default:
      return state
  }
}

export default reducer