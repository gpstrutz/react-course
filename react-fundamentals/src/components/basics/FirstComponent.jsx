import React from 'react'

export default function firstComponent() {
    const message = "Welcome to ReactJS!"
    return (
        <div>
            <h2>Component With JSX</h2>
            <p>{ message }</p>
        </div>
    )
}