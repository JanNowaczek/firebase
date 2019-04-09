import React, { Component } from 'react';
import faker from 'faker';
class Create extends Component {

    state = {
        name: '',
        age: '',
        color: ''
    }

    // handleChange = (event, fieldName) => {
    //   this.setState({ [fieldName]: event.target.value });
    // }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        fetch('https://jfddl7-api-b832f.firebaseio.com/cats.json', {
            method: 'POST',
            body: JSON.stringify({
                ...this.state,
                role: faker.name.jobTitle()
            })
        })
            .then(response => {
                if (response.ok) {
                    this.props.history.push('/');
                }
            })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Create form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Name: <input type="text" name="name" onChange={this.handleChange} />
                    </div>
                    <div>
                        Age: <input type="text" name="age" onChange={this.handleChange} />
                    </div>
                    <div>
                        Color: <input type="text" name="color" onChange={this.handleChange} />
                    </div>
                    <button>Send me</button>
                </form>
            </div>
        );
    }
}

export default Create;