import * as React from 'react'
import Hangman from './Hangman'
import {NewGuess} from './NewGuessForm'
import {connect} from 'react-redux';
import {newGame, makeGuess} from '../actions/game'
const {showGuess} = require( '../lib/game')



class HangmanContainer extends React.PureComponent {

  componentDidMount() {
      if(this.props.game.word===""){
        this.props.newGame()

      }
    }

   // console.log(this.props.updateCount(this.props.game.word, this.props.game.guesses))

  // componentDidUpdate = (prevProps) => {
  //     if(this.props.game.guesses !== prevProps.game.guesses){
  //       console.log(wrongGuessCount(this.props.game.word,this.props.game.guesses))
  //     }
  // }


  render() {
    return (
    <div>
      <Hangman word={showGuess(this.props.game.word, this.props.game.guesses)}
        guesses = {this.props.game.guesses}
        wrongGuesses={this.props.game.wrongGuesses}
      />
      <NewGuess/>
    </div>)
  
  }
    
}

const mapStateToProps = (state) => ({
  game: state.game
})


export default connect(mapStateToProps, {newGame, makeGuess})(HangmanContainer)