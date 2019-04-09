import React, { Component } from 'react';

class Read extends Component {

    state = {};

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`https://jfddl7-api-b832f.firebaseio.com/cats/${id}.json`)
            .then(response => response.json())
            .then(data => {
                this.setState(data);
            })
    }

    render() {
        return (
            <div>
                <div>
                    Name: {this.state.name}
                </div>
                <div>
                    Age: {this.state.age}
                </div>
                <div>
                    Color: {this.state.color}
                </div>
                <div>
                    Role: {this.state.role || null}
                </div>
                <div>
                    <img src={this.state.url} alt="" />
                </div>
            </div>
        );
    }
}

export default Read;