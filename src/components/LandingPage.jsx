import * as React from 'react'
import {Link} from 'react-router-dom'

export default class LandingPage extends React.PureComponent{
  render (){
    return (
      <div className = "welcome-container">
        <h1 >Welcome to</h1>
        <img  className = "hangman-image" src="http://www.thehangman.co.nz/images/the-Hangman-logo.png" alt = "hangman"/>
          <Link to={`/hangman}`}>
            <p className = "start-game-link">Start Playing!</p>
          </Link>
      </div>
    )
  }
}