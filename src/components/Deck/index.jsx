import React, { Component } from 'react';
import './Deck.css';
import Card from '../Card';
import Button from '../Button';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      suits: ['spades', 'diamonds', 'clubs', 'hearts'],
      values: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    };

    const { deck, suits, values } = this.state;
    suits.forEach(suit => {
      values.forEach(value => {
        deck.push({ suit: suit, value: value });
      });
    });
  }

  pop() {
    const newDeck = this.state.deck.map(card => Object.assign({}, card));
    newDeck.pop();
    this.setState({ deck: newDeck });
  }

  shuffle() {
    const newDeck = this.state.deck.map(card => Object.assign({}, card));
    newDeck.sort((a, b) => 0.5 - Math.random());
    this.setState({ deck: newDeck });
  }

  reset() {
    const newDeck = [];
    const { suits, values } = this.state;
    suits.forEach(suit => {
      values.forEach(value => {
        newDeck.push({ suit: suit, value: value });
      });
    });
    this.setState({ deck: newDeck });
  }

  push(card) {
    if (card && card.suit && card.value) {
      const newDeck = this.state.deck.map(card => Object.assign({}, card));
      newDeck.push(card);
      this.setState({ deck: newDeck });
    } else {
      console.log('invalid card');
    }
  }

  render() {
    return (
      <div className="deck-container">
        <Button btnName="Reset" onClick={() => this.reset()} />
        <Button btnName="Shuffle" onClick={() => this.shuffle()} />
        <Button btnName="Pop" onClick={() => this.pop()} />
        <div className="deck">
          {this.state.deck.map((val, i) => (
            <Card key={val.suit + val.value + i} card={val} />
          ))}
        </div>
      </div>
    );
  }
}

export default Deck;
