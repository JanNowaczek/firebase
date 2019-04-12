import React from 'react'

import { database } from './firebaseConf'

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

    render() {
        return (
            <div>
                <MessagesList 
                    messages={this.state.messages}
                />
                <NewMessageForm 
                    newMessageText={this.state.newMessageText}
                    onNewMessageTextChanged={this.onNewMessageTextChanged}
                />
            </div>
        )
    }
}

export default Chat