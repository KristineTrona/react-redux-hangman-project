import * as React from 'react'

export default function winOrLose(props){
    return (
      <div className = "win-or-lose-message">
        <h3>{props.message}</h3>
      </div>
    )
  }