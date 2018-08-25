import {NEW_GAME, MAKE_GUESS} from '../actions/game'


const reducer = (state = {word: "", guesses:[]}, action = {}) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...state,
        word: action.payload.word
      }
    case MAKE_GUESS:
      return [...state, {...action.payload}]
    default:
      return state
  }
}

export default reducer