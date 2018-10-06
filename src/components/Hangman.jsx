import * as React from 'react'
import stage0 from '../lib/images/stage-0.png'
import stage1 from '../lib/images/stage-1.png'
import stage2 from '../lib/images/stage-2.png'
import stage3 from '../lib/images/stage-3.png'
import stage4 from '../lib/images/stage-4.png'
import stage5 from '../lib/images/stage-5.png'
import stage6 from '../lib/images/stage-6.png'

const showImage = (badGuesses) => {
  switch(badGuesses){
    case 0: 
    return stage0
    case 1: 
    return stage1
    case 2: 
    return stage2
    case 3: 
    return stage3
    case 4: 
    return stage4
    case 5: 
    return stage5
    case 6: 
    return stage6
    default: 
    return stage6
  }
}

export default function hangman (props){
    return (
      <div className = "game-container">
        <h1>Guess this word:</h1>
          <div>{props.hangman}</div>
            <p>{props.word}</p>
            <p>You guessed: {props.guesses.map(guess => `${guess} ; `)}</p>
            <img className="hangman-game-level" src={showImage(props.wrongGuesses)} alt="hangman-game-level"/>
            <p>You have <span style={{color: 'red'}}> {props.wrongGuesses}</span> wrong guesses</p>
            <p><span style={{color: 'green'}}>{props.tries} </span> more tries left</p>
      </div>
    )
  }