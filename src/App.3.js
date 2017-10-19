import React, { Component } from 'react';
import './App.css';
import firebase from './firebase/firebase'

import Header from './components/Header'
import Main from './components/Main'
import Player from './components/Player'

// const products =  [
//   { "id": 0, "title": "Osso Bucco", "price": "$6.99", "image": "http://res.cloudinary.com/react-web/image/upload/v1506167688/osso-bucco_a1tgyl.png"},
//   { "id": 1, "title": "Dolphin Shin", "price": "$16.99", "image": "http://res.cloudinary.com/react-web/image/upload/v1506167688/osso-bucco_a1tgyl.png"}
// ];


// function ProductList(props) {
//   const products = props.products;
//   const productItems = products.map((product) =>
//     <li 
//     key={product.id}
//     >
//     {product.title}
//     <br />
//     {product.price}
//     </li>
    
// );
//   return <ul>{productItems}</ul>
// }

const Product = (props) => (
  <div className="card-container">
  <div className="card">
    <div className="front">
      <div className="eng">{props.title}</div>
    </div>
    <div className="back">
      <div className="eng">{props.price}</div>
    </div>
  </div>
</div>
)

class App extends React.Component{
  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      products: [
        { "id": 0, "title": "Osso Bucco", "price": "$6.99", "image": "http://res.cloudinary.com/react-web/image/upload/v1506167688/osso-bucco_a1tgyl.png"},
        { "id": 1, "title": "Dolphin Shin", "price": "$16.99", "image": "http://res.cloudinary.com/react-web/image/upload/v1506167688/osso-bucco_a1tgyl.png"},
        { "id": 1, "title": "Leg Chops", "price": "$12.00", "image": "http://res.cloudinary.com/react-web/image/upload/v1506167688/osso-bucco_a1tgyl.png"},
        { "id": 1, "title": "Legs", "price": "$9.5", "image": "http://res.cloudinary.com/react-web/image/upload/v1506167688/osso-bucco_a1tgyl.png"}
      ],
      currentCard: {}
    }
  }
  componentWillMount(){
    const currentCards = this.state.products;

    this.setState({
      products: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

getRandomCard(currentCards) {
  var product = currentCards[Math.floor(Math.random() * currentCards.length)];
  return(product);
}

updateCard(){
  const currentCards = this.state.products;
  this.setState({
    currentCard: this.getRandomCard(currentCards)
  })
}

  render(){
    return(
      <div>
      <div>
      <button>Beef</button>
      <button>Lamb</button>
      <Product title={this.state.currentCard.title}
      price={this.state.currentCard.price}
      />
      </div>
      <div>
      <DrawCard drawCard={this.updateCard}/>
      </div>
      </div>
    )
  }
}

export default App;

class DrawCard extends Component{
  constructor(props) {
    super(props);
    this.drawCard = this.drawCard.bind(this);
  }
  drawCard(){
    this.props.drawCard();
  }
  render(props){
    return(
      <div className="buttonContainer">
      <button className="btn" onClick={this.drawCard}>Draw Card</button>
      </div>
    )
  }
}

