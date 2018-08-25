import * as React from 'react'
import Hangman from './Hangman'
import {NewGuess} from './NewGuessForm'
import Winner from './Winner'
import {connect} from 'react-redux';
import {newGame, makeGuess} from '../actions/game'
const {showGuess, wrongGuessCount, isWinner, gameFinished } = require( '../lib/game')


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
    const gameStatus = wrongGuessCount(this.props.game.word, this.props.game.guesses)
      return (
        <div className = "hangman-container">
          <Hangman
            word={showGuess(this.props.game.word, this.props.game.guesses)}
            guesses = {this.props.game.guesses}
            wrongGuesses={gameStatus}
            tries = {gameStatus <= 6 ? 6-gameStatus : 0}/>
          <NewGuess/>
          <Winner message = {this.handleWinOrLose()}/>
        </div>)
      }   
}

const mapStateToProps = (state) => ({
  game: state.game
})


export default connect(mapStateToProps, {newGame, makeGuess})(HangmanContainer)