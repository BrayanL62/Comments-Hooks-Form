import React from 'react';
import './Comment.css'

export default function Comment({id, name, body, isAdmin, comments, setComments}) {

    const deleteComment = () => {
        console.log(id);

        // Pour supprimer un commentaire, j'ai besoin de mon tableau d'avant et de la fonction qui va modifier ce tableau
        let newComments = comments.filter(comments => comments.id !== id);
        // newComments c'est mon tableau de commentaire sauf celui qui a pour id la variable id qu'on vient de cliquer - Jean-Baptiste Lavisse - Copyright 2021
        setComments(newComments);
    }

    return (
        <li>
            <strong>{name}</strong> 
            {isAdmin ? <button className="delete" onClick={deleteComment}></button> : null}<br />
            {body}
            
        </li>
    )
}
