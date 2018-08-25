import * as React from 'react'

export default function hangman (props){
    return (
      <div>
        <h1>Guess this word:</h1>
        <p>{props.word}</p>
        <p>You guessed: {props.guesses}</p>
        <p>You have {props.guessesCount} guesses left</p>
      </div>
    )
  }