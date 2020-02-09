import React, { Component } from 'react'; 
import axios from 'axios';
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/"

class Deck extends Component {
  constructor(props){
    super(props);
    this.state = {deck: null, drawn:[]};
    this.getCard = this.getCard.bind(this);
  }
  
  async componentDidMount(){
   let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
   this.setState({ deck: deck.data});
  }
  
  async getCard(){
    let id = this.state.deck.deck_id;
    try{
      let card_url = `${API_BASE_URL}/${id}/draw/`
      let cardRes = await axios.get(card_url);
      if(!cardRes.data.success){
        throw new Error("No Card Remaing")
      }
      console.log(cardRes.data);
      let card = cardRes.data.cards[0];
      this.setState(st =>({
        drawn:[
          ...st.drawn,
          {
            id:card.code,
            image:card.image,
            name: `${card.value} of ${card.suit}`
          }
        ]
      }));
    } catch (e){
      alert(e);
    }
  }


  render() {
    return (
      <div>
        <h1>Card Dealer</h1>
        <button onClick={this.getCard}>Get Card!</button>
      </div>
    )
  }
}

export default Deck;