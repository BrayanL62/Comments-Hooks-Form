import React from 'react'
import Comment from './Comment'

export default function CommentList({isAdmin, comments}) {

    

    const commentsJSX = comments.map(comment => {
        return <Comment name={comment.name} body={comment.body} isAdmin={isAdmin} />
    })

    /* 
    commentsJSX, dedans y aura: 
    <Comment name="JB" message="Youhou la famille!" />
    <Comment name="Kirikou" message="Je ne suis pas grand mais je suis vaillant" />
    */


    return (
        <div>        
            <h1 className="title">Liste des commentaires ({comments.length})</h1>
            <ul className="comment-list">
                {commentsJSX}
            </ul>           
        </div>
    )
}
