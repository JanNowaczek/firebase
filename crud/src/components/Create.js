import React, { Component } from 'react'
import faker from 'faker'

import { db } from '../firebase'
class Create extends Component {

  state = {
    name: '',
    age: '',
    color: '',
    url: ''
  }

  // handleChange = (event, fieldName) => {
  //   this.setState({ [fieldName]: event.target.value });
  // }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
  // handleSubmit = async (event) => {

    const headers = {
      'x-api-key': 'd24b427d-578e-4609-86bd-b36555c3875c'
    }
    // let response = await fetch('https://api.thecatapi.com/v1/images/search', { headers });
    // let responseData = await response.json();
    // await this.setState({ url: responseData[0].url });

    // response = await fetch('https://jfddl7-api-b832f.firebaseio.com/cats.json', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     ...this.state,
    //     role: faker.name.jobTitle()
    //   })
    // });
    // if (response.ok) {
    //   this.props.history.push('/');
    // }

    fetch('https://api.thecatapi.com/v1/images/search', { headers })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ url: responseData[0].url }, () => {
        db.ref('/cats').push({
          ...this.state,
          role: faker.name.jobTitle()
        })
        .then(() => {
          this.props.history.push('/')
        })

        // fetch('https://jfddl7-api-b832f.firebaseio.com/cats.json', {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     ...this.state,
        //     role: faker.name.jobTitle()
        //   })
        // })
        // .then(response => {
        //   if (response.ok) {
        //     this.props.history.push('/');
        //   }
        // });
      })
    })

    event.preventDefault()
  }

  render () {
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
    )
  }
}

export default Create