import React from 'react';
import './Comment.css'

export default function Comment({name, body, isAdmin}) {

    return (
        <li>
            <strong>{name}</strong> 
            {isAdmin ? <button className="delete"></button> : null}<br />
            {body}
            
        </li>
    )
}
