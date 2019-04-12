import React from 'react'

import { auth, database } from './firebaseConf'

import MessagesList from './MessagesList'
import NewMessageForm from './NewMessageForm'

class Chat extends React.Component {
    state = {
        messages: null,
        newMessageText: '',
    }

    componentDidMount(){
        database.ref('JFDDL7/chat').on(
            'value',
            (snapshot) => this.setState({
                messages: snapshot.val()
            })
        )
    }

    componentWillUnmount(){
        database.ref('JFDDL7/chat').off()
    }

    onNewMessageTextChanged = (event) => this.setState({
        newMessageText: event.target.value,
    })

    onNewMessageSent = () => {
        database.ref('JFDDL7/chat').push({
            text: this.state.newMessageText,
            date: Date.now(),
            author: {
                displayName: auth.currentUser.displayName,
                email: auth.currentUser.email,
                photoURL: auth.currentUser.photoURL,
            }
        })
        .then(
            () => {
                this.setState({
                    newMessageText: '',
                })
            }
        )
    }

    render() {
        return (
            <div>
                <MessagesList 
                    messages={this.state.messages}
                />
                <NewMessageForm 
                    newMessageText={this.state.newMessageText}
                    onNewMessageTextChanged={this.onNewMessageTextChanged}
                    onNewMessageSent={this.onNewMessageSent}
                />
            </div>
        )
    }
}

export default Chat