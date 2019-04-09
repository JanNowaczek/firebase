import React, { Component } from 'react'

import { db } from '../firebase'
class Update extends Component {

    state = {
        name: '',
        age: '',
        color: ''
    }

    componentDidMount() {
        const id = this.props.match.params.id
        // fetch(`https://jfddl7-api-b832f.firebaseio.com/cats/${id}.json`)
        // .then(response => response.json())
        // .then(data => {
        //   this.setState(data);
        // })
        db.ref(`/cats/${id}`).once('value', snapshot => {
            this.setState(snapshot.val())
        })
    }

    // handleChange = (event, fieldName) => {
    //   this.setState({ [fieldName]: event.target.value });
    // }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        const id = this.props.match.params.id;
        db.ref(`/cats/${id}`).set(this.state);
        // fetch(`https://jfddl7-api-b832f.firebaseio.com/cats/${id}.json`, {
        //   method: 'PATCH',
        //   body: JSON.stringify(this.state)
        // })
        // .then(response => {
        //   if (response.ok) {
        //     this.props.history.push(`/read/${id}`);
        //   }
        // })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Update form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        Age: <input type="text" value={this.state.age} name="age" onChange={this.handleChange} />
                    </div>
                    <div>
                        Color: <input type="text" value={this.state.color} name="color" onChange={this.handleChange} />
                    </div>
                    <button>Send me</button>
                </form>
            </div>
        )
    }
}

export default Update