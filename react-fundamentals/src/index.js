import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import First from './components/basics/FirstComponent'
import WithParams from './components/basics/WithParameters'

const element = document.getElementById('root')


// Using JSX sintax
ReactDOM.render (
    <div>
        <First></First>
        <WithParams 
            title="React Components" 
            subtitle="Component with Parameters"
            class="#1"
        />
    </div>, element
)