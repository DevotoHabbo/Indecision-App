import React from 'react'
const Action = (props)=>(
        <div>
        <button disabled={!props.hasOptions} className="big-button" onClick={props.pickOption}>What should I do?</button>
     
     
        
        </div>
    )  
export {Action as default}