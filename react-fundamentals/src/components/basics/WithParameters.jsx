import React from 'react'

export default function ComponentParameters( props ) {
    return (
        <div>
            <h2>{ props.title } - { props.class }</h2>
            <h3>{ props.subtitle }</h3>
        </div>
    )
}