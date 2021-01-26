import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import First from './components/basics/FirstComponent'

const element = document.getElementById('root')


// Using JSX sintax
ReactDOM.render (
    <div>
        <strong>
            <First></First>
        </strong>
    </div>, element
)