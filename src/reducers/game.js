import {NEW_GAME, MAKE_GUESS} from '../actions/game'
//SHOW_GUESSED

const reducer = (state = {word: "", guesses:[]}, action = {}) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        word: action.payload.word}
    case MAKE_GUESS:
      const clone = {...state}
      clone.guesses = [action.payload]
      return clone
    default:
      return state
  }
}

export default reducer