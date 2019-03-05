import React, { Component } from 'react';

import { success, fail, repair } from './enchancment/enhancement.js';
import './App.css';

class App extends Component {
  state = {
    item: {
      name: 'Rosar Shortsword',
      type: 'Weapon',
      durability: 100,
      enhancement: 0,
      displayName: `[+0] Rosar Shortsword`
    },
    error: ''
  };

  enhanceItem = item => { 
    let rng = Math.floor(Math.random() * 101);

    if(item.enhancement === 20){
      return null;
    } else {
      if(item.enhancement < 7){
        const newItem = success(item);
        this.setState({ item: newItem, error: ''});
      } else  {
        if(rng > 80){
          const newItem = success(item);
  
          if(newItem !== null){
            this.setState({ item: newItem, error: '' });
          } else {
            this.setState({ error : 'This item can no longer be Enhance' });
          }
        } else {
          const newItem = fail(item);
          console.log(newItem)
          if(newItem !== null){
            this.setState({ item: newItem, error: 'Oof this Enhancement failed' });
          } else {
            this.setState({ error: 'You have to repair this item to try and Enhance it further' });
          }
        }
      }
    }
  }

  repairItem = item => {
    const newItem = repair(item);

    this.setState({ item: newItem });
  }

  render() {
    return (
      <div className="App">
        <div className="item-wrapper">
          <h2>{this.state.item.displayName}</h2>
          <p>Type: {this.state.item.type}</p>
          <p>durability: {this.state.item.durability}</p>
          <p>Enhancement: {this.state.item.enhancement}</p>
        </div>
        <div className="buttons-wrapper">
          <button onClick={() => this.enhanceItem(this.state.item)}>Enhance</button>
          <button onClick={() => this.repairItem(this.state.item)}>Repair</button>
        </div>
        <p>{this.state.error}</p>
      </div>
    );
  }
}

export default App;
