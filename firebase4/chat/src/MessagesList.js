import React from 'react'

import { auth } from './firebaseConf'

import List from '@material-ui/core/List'
import Message from './Message'
import { reverse } from 'dns';

const MessagesList = (props) => {
    const messagesArray = (
        Object.entries(props.messages || {})
            .map(
                ([key, value]) => ({
                    ...value,
                    key,
                })
            )
            .reverse()
    )

    const filteredMessages = messagesArray.filter(
        message => message.isFav && message.isFav[auth.currentUser.uid]
    )

    const showedMessage = (
        props.isFavFilterActive ?
        filteredMessages
        :
        messagesArray
    )

    return(
        <List>
            {
                showedMessage.map(
                    message => (
                        <Message
                            key={message.key}
                            message={message}
                            toggleFavorite={props.toggleFavorite}
                        />
                    )
                )
            }
        </List>
    )
}

export default MessagesList