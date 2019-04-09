import React, { Component } from 'react';

class List extends Component {

  state = {
    data: [
      { id: 1, name: 'Lorem'}, { id: 2, name: 'Ipsum'}, { id: 3, name: 'Sit'}
    ]
  }

  render() {
    return (
      <div>
        {this.state.data.map(elem => (
          <div key={elem.id}>{elem.name}</div>
        ))}
      </div>
    );
  }
}

export default List;