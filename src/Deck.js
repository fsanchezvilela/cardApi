import React, { Component } from 'react'

class Deck extends Component {
  constructor(props){
    super(props);
    this.state = {deck: null};
  }


  render() {
    return (
      <div>
        <h1>Card Dealer</h1>
      </div>
    )
  }
}

export default Deck;