import React from 'react'

import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

const styles = {
    paper: {
        padding: 20,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        boxSizing: 'border-box',
    }
}

const NewMessageForm = (props) => (
    <Paper
        style={styles.paper}
    >
        <form
            onSubmit={event => {
                event.preventDefault(
                )
                props.onNewMessageSent()  
            }}
        >
            <TextField
                label={'Wpisz wiadomość...'}
                fullWidth={true}
                value={props.NewMessageText}
                onChange={props.onNewMessageTextChanged}

            />
        </form>
    </Paper>
)

export default NewMessageForm
