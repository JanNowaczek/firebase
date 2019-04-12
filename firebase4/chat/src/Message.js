import React from 'react'

import { auth } from './firebaseConf'

import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'

import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'

const Message = (props) => (
    <div>
        <ListItem
            alignItems={'flex-start'}
        >
            <ListItemAvatar>
                <Avatar
                    alt={props.message.author.displayName}
                    src={props.message.author.photoURL}
                />
            </ListItemAvatar>
            <ListItemText
                primary={props.message.author.displayName}
                secondary={props.message.text}
            />
            <ListItemSecondaryAction>
                <IconButton>
                    {
                        (
                            props.message.isFav &&
                            props.message.isFav[auth.currentUser.uid]
                        ) ?
                            <StarIcon />
                            :
                            <StarBorderIcon />
                    }
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    </div>
)

export default Message