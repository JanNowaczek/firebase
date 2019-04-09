import React, { Component } from 'react';

class Create extends Component {

    state = {
        name: '',
        age: ''
    }

    handleChange = (event, fieldName) => {
        this.setState({ [fieldName]: event.target.value });
    }

    render() {
        return (
            <div>
                <h2>Create form</h2>
                <form>
                    <div>
                        Name: <input type="text" onChange={(event) => this.handleChange(event, 'name')} />
                    </div>
                    <div>
                        Age: <input type="text" onChange={(event) => this.handleChange(event, 'age')} />
                    </div>
                    <button>Send me</button>
                </form>
            </div>
        );
    }
}

export default Create;