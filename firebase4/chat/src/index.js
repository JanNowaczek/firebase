import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App'
import Auth from './Auth'

ReactDOM.render(
    <Auth>
        <App />
    </Auth>,
    document.querySelector('#root')
)