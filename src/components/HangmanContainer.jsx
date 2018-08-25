import * as React from 'react'
import Hangman from './Hangman'
import {NewGuess} from './NewGuessForm'
import {connect} from 'react-redux';
import {newGame, makeGuess} from '../actions/game'
const {showGuess, wrongGuessCount} = require( '../lib/game')



class HangmanContainer extends React.PureComponent {

  componentDidMount() {
      if(this.props.game.word===""){
        this.props.newGame()

      }
    }

  render() {
    return (
    <div>
      <Hangman word={showGuess(this.props.game.word, this.props.game.guesses)}
        guesses = {this.props.game.guesses}
        wrongGuesses={wrongGuessCount(this.props.game.word, this.props.game.guesses)}
      />
      <NewGuess/>
    </div>)
  
  }
    
}

const mapStateToProps = (state) => ({
  game: state.game
})


export default connect(mapStateToProps, {newGame, makeGuess})(HangmanContainer)