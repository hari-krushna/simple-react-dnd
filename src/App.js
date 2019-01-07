import React, { Component } from 'react';
import './App.css';
import Item from "./Item";
import Target from "./Target";
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ]
    }
  }

  deleteItem = id => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.id !== id)
      }
    })
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <div className="App-intro">
          <div className="app-container">
              <div className="item-container">
                { items.map((item, i) => (
                  <Item key={item.id} item={item} handleDrop={id => this.deleteItem(id)} />
                ))}
              </div>
              <Target />
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
