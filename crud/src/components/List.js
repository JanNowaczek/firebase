import React, { Component } from 'react';

class List extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        fetch('https://jfddl7-api-b832f.firebaseio.com/cats.json')
            .then(response => response.json())
            .then(responseData => {
                const data = [];
                Object.entries(responseData).forEach(elem => {
                    data.push({
                        id: elem[0],
                        ...elem[1]
                    });
                });
                this.setState({ data: data });
                // this.setState({ data });
            })
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