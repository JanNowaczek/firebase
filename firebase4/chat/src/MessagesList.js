import React from 'react'

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

    return(
        <List>
            {
                messagesArray.map(
                    message => (
                        <Message
                            key={message.key}
                            message={message}
                        />
                    )
                )
            }
        </List>
    )
}

export default MessagesList