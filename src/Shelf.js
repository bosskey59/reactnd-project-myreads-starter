import React, { Component } from 'react';
import Book from './Book'

export default class Shelf extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book updateState={this.props.updateState} id ={1}/>
            <Book updateState={this.props.updateState} id ={2}/>
          </ol>
        </div>
      </div>
    );
  }
}
