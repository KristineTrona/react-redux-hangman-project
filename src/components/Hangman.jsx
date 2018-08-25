import * as React from 'react'

export default function hangman (props){
    return (
      <div>
        <h1>Guess this word:</h1>
        <p>{props.word}</p>
        <p>You guessed: {props.guesses.map(guess => `${guess} ; `)}</p>
        <p>You have {props.wrongGuesses} wrong guesses</p>
      </div>
    )
  }