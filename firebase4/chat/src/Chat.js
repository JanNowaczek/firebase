import React from 'react'

import MessagesList from './MessagesList'
import NewMessageForm from './NewMessageForm'

class Chat extends React.Component {
    state = {
        messages: null,
        newMessageText: '',
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