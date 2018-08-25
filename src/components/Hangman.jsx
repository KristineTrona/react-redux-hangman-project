import * as React from 'react'

export default function hangman (props){
    return (
      <div className = "game-container">
        <h1>Guess this word:</h1>
        <div>{props.hangman}</div>
        <p>{props.word}</p>
        <p>You guessed: {props.guesses.map(guess => `${guess} ; `)}</p>
        <p>You have <span style={{color: 'red'}}> {props.wrongGuesses}</span> wrong guesses</p>
        <p><span style={{color: 'green'}}>{props.tries} </span> more tries left</p>
      </div>
    )
  }