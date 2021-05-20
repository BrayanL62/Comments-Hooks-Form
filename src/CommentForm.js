import React, {useState} from 'react';



export default function CommentForm({comments}) {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const addComment = (event) => {
        event.preventDefault();
        let AddComment = {
            name: name,
            message: message
        }
        console.log(AddComment);
        setName("");
        setMessage("");
    }

    return (
        <div className="comment__form">
            <div className="columns">
          <div className="column">
              <h1 className="title">Ajouter un commentaire</h1>
              <form className="commentform" onSubmit={addComment}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Message</label>
                    <div className="control"><textarea className="textarea" placeholder="Your comment" value={message} onChange={e => setMessage(e.target.value)}></textarea></div>
                </div>
                <div className="field">
                    <div className="control"><button className="button is-primary" >Envoyer</button></div>
                </div>
              </form>
          </div>
          </div>
        </div>
    )
}
