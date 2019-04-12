import React from 'react'
import moment from 'moment'
import 'moment/locale/pl'

import { auth } from './firebaseConf'

import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import StarIcon from '@material-ui/icons/Star'

moment.locale('pl')

const Message = (props) => (
    <div>
        <ListItem
            alignItems={'flex-start'}
        >
            <ListItemAvatar>
                <Avatar
                    alt={props.message.author && props.message.author.displayName}
                    src={props.message.author && props.message.author.photoURL}
                />
            </ListItemAvatar>
            <ListItemText
                primary={
                    <div>
                        <span>
                            {props.message.author && props.message.author.displayName}
                            {' '}
                        </span>
                        <Tooltip
                            title={moment(props.message.date).format('LLL')}
                        >
                            <span
                                style={{ fontSize: 'small', color: 'grey' }}
                            >
                                {moment(props.message.date).fromNow()}
                            </span>
                        </Tooltip>
                    </div>
                }
                secondary={props.message.text}
            />
            <ListItemSecondaryAction>
                <IconButton
                    onClick={() => props.toggleFavorite(props.message)}
                >
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