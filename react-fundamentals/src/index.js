import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

const element = document.getElementById('root')


// Using JSX sintax
ReactDOM.render (
    <div>
        <strong>Hello React!</strong>
    </div>, element
)

// We can interpolate variables on JSX code

/* 
    const greeting = <strong>Hello World!</strong>

    ReactDOM.render (
        <div>
            { greeting }
        </div>, element
    )
*/