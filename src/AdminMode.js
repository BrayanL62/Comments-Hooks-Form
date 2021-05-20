import React from 'react'


export default function AdminMode({isAdmin, toggleAdminMode}) {
  


  
    return (
        <div className="admin__mode">
            <article className={isAdmin ? "message is-danger":"message is-info"}>
          <div className="message-body">
            <button onClick={toggleAdminMode} className={isAdmin ? "button is-danger" : "button is-info"}>{isAdmin ? "Désactiver le mode d'administration" : "Activer le mode d'administration"}</button>
          </div>
        </article>
        </div>
    )
}
