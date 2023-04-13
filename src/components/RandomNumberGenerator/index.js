// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onButton = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})

    console.log('kkk')
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>

          <button className="Button" type="button" onClick={this.onButton}>
            Generate
          </button>

          <p className="result">{count}0</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
