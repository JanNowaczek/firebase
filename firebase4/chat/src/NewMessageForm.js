import React from 'react'

import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

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
        <div>
            <FormControlLabel
                control={
                    <Switch
                        checked={props.isFavFilterActive}
                        onChange={props.toggleFavFilterActive}
                    />
                }
                label={'Wyświetlaj tylko ulubione'}
            />
        </div>
        <form
            onSubmit={event => {
                event.preventDefault()

                props.onMessageSent()
            }}
        >
            <TextField
                label={'Wpisz wiadomość...'}
                fullWidth={true}
                value={props.newMessageText}
                onChange={props.onNewMessageTextChanged}
            />
        </form>
    </Paper>
)

export default NewMessageForm