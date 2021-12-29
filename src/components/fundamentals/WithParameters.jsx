import React from "react";

export default function Greeting(props) {
    return (
        <div>

            <h1>Component With Parameters</h1>

            <p>First Name: { props.firstName }</p>
            <p>Last Name: { props.lastName }</p>
            <p>Age: { props.age }</p>
        </div>
    )
}
