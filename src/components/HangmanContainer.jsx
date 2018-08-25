import * as React from 'react'
import Hangman from './Hangman'
import {NewGuess} from './NewGuessForm'
import Winner from './Winner'
import {connect} from 'react-redux';
import {newGame, makeGuess} from '../actions/game'
const {showGuess, wrongGuessCount, isWinner, gameFinished } = require( '../lib/game')
const hangman = require('hangman-ascii');

// const isWinner = (word, guesses) => {
//   return showGuess(word, guesses) === word.split('').join(' ')
// }

// const gameFinished = (word, guesses) => {
//   return (wrongGuessLimit(word, guesses) || isWinner(word, guesses))
// }

class HangmanContainer extends React.PureComponent {

  componentDidMount() {
      if(this.props.game.word===""){
        this.props.newGame()
      }
    }

  handleWinOrLose = () => {

    if(isWinner(this.props.game.word,this.props.game.guesses) === true){
      return "Congratulations, you won!"
    } else if (gameFinished(this.props.game.word,this.props.game.guesses) === true) {
      return "You lost :( Better luck next time!"
    }
  }

  render() {
    return (
    <div>
      <Hangman
        hangman = {hangman.drawLevel(wrongGuessCount(this.props.game.word, this.props.game.guesses), 'magenta')} 
        word={showGuess(this.props.game.word, this.props.game.guesses)}
        guesses = {this.props.game.guesses}
        wrongGuesses={wrongGuessCount(this.props.game.word, this.props.game.guesses)}
        tries = {6-wrongGuessCount(this.props.game.word, this.props.game.guesses)}
      />
      <NewGuess/>
      <Winner message = {this.handleWinOrLose()}/>
    </div>)
  
  }
    
}

const mapStateToProps = (state) => ({
  game: state.game
})


export default connect(mapStateToProps, {newGame, makeGuess})(HangmanContainer)