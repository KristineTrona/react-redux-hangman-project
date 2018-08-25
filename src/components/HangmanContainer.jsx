import * as React from 'react'
import Hangman from './Hangman'
import { connect } from 'react-redux';


class HangmanContainer extends React.PureComponent {
  state = {}

  componentDidMount() {
    
        }

  render() {
    return (<div>
        <Hangman/>
    </div>)
    }   
}

const mapStateToProps = (state) => ({
   
})


export default connect(mapStateToProps, {})(HangmanContainer)