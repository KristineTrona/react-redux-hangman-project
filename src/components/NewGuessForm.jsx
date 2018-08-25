import * as React from 'react'
import store from '../store'
import {makeGuess} from '../actions/game'

export class NewGuess extends React.PureComponent {
  state = {
    guess: ""
  }

handleSubmit = (event) => {
    event.preventDefault()
      if(this.state.guess!==""){
        store.dispatch(makeGuess(this.state.guess.toLowerCase()))
        event.target.reset()
        
      }
    }
  
  handleChange = (event) => {
    if(event.target.value!== ""){
    this.setState({ guess: event.target.value })
    }
  }

  render() {
    console.log(this.state)
    return (
      <form className = "newGuess" onSubmit={this.handleSubmit}>
          <label> Make a new guess:
            <input placeholder = "enter a letter" type="text" maxLength="1" name="guess" value={this.props.guess} onChange={this.handleChange}/>
          </label>
          <button type="submit">Submit</button>
      </form>
    )
  }
}
