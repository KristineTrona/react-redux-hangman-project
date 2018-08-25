import * as React from 'react'
import Hangman from './Hangman'
import {connect} from 'react-redux';
import {newGame} from '../actions/game'
const {showGuess} = require( '../lib/game')



class HangmanContainer extends React.PureComponent {

  componentDidMount() {
        this.props.newGame()
      }
        
  
  render() {
    
    return (<div>
        <Hangman word={showGuess(this.props.game.word, this.props.game.guesses)}/>
      
        {/* <form>
          <label>Guess: 
            <input name="name" value = {this.state.value} onChange = {this.handleEvent}/>
          </label>
        </form> */}
    </div>)
    }   
}

const mapStateToProps = (state) => ({
  game: state.game
})


export default connect(mapStateToProps, {newGame})(HangmanContainer)