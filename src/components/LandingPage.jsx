import * as React from 'react'
import {Link} from 'react-router-dom'

export default class LandingPage extends React.PureComponent{
  render (){
    return (
      <div>
        <h1>Welcome!</h1>
          <Link to={`/hangman}`}>
            <p>Start Playing!</p>
          </Link>
      </div>
    )
  }
}