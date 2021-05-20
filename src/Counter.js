import React from 'react';

export default function Counter({score, incrementScore}) {
    /* 
    score: afficher la valeur de l'état
    useState(0): entre parenthèses, valeur initiale de votre état
    */

    

    
    return (
        <div>
            <button onClick={incrementScore}>Bouton groupé, cliquez moi {score} fois</button>
        </div>
    )
}
