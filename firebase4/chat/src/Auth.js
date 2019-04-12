
import React from 'react'

import { auth, googleProvider } from './firebaseConf'

import Button from '@material-ui/core/Button'

const styles = {
    root: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {}
}

class Auth extends React.Component {
    state = {
        isUserLoggedIn: false,
    }

    onLogInByGoogleClick = () => {
        auth.signInWithPopup(googleProvider)
            .catch(console.log)
    }

    render() {
        return (
            <div>
                {
                    this.state.isUserLoggedIn ?
                        this.props.children
                        :
                        <div
                            style={styles.root}
                        >
                            <h1>jfddl7 Chat</h1>
                            <Button
                                variant={'contained'}
                                color={'secondary'}
                                onClick={this.onLogInByGoogleClick}
                            >
                                LOGIN BY GOOGLE
                            </Button>

                        </div>
                }
            </div>
        )
    }
}
export default Auth