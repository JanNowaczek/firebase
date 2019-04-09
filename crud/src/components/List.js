import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { db } from '../firebase'

class List extends Component {

    state = {
        data: []
    }

    fetchData = () => {

        db.ref('/cats').on('value', snapshot => {
            const data = [];
            if (snapshot.val() === null) {
                return;
            }
            Object.entries(snapshot.val()).forEach(elem => {
                data.push({
                    id: elem[0],
                    ...elem[1]
                })
            })
            this.setState({ data: data })
        })

        // fetch('https://jfddl7-api-b832f.firebaseio.com/cats.json')
        // .then(response => response.json())
        // .then(responseData => {
        //   const data = [];
        //   if (responseData === null) {
        //     return;
        //   }
        //   Object.entries(responseData).forEach(elem => {
        //     data.push({
        //       id: elem[0],
        //       ...elem[1]
        //     });

        //     // data.push({
        //     //   id: elem[0],
        //     //   name: elem[1].name,
        //     //   age: elem[1].age,
        //     //   color: elem[1].color,
        //     // });

        //   });
        //   this.setState({ data: data });
        //   // this.setState({ data });
        // })
    }

    componentDidMount() {
        this.fetchData()
    }

    handleRemove = (id) => {
        fetch(`https://jfddl7-api-b832f.firebaseio.com/cats/${id}.json`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    this.fetchData()
                }
            })
    }

    render() {
        return (
            <div>
                {this.state.data.map(elem => (
                    <div key={elem.id}>
                        <Link to={`/read/${elem.id}`}>{elem.name}</Link> <Link to={`/update/${elem.id}`}>Update</Link> <button onClick={() => this.handleRemove(elem.id)}>Remove</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default List;