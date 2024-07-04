import React from 'react'
import "../styles/BurguerButton.css"

function BurguerButton(props) {
  return (
    <div>
       <div onClick={props.handleClick} class={`icon nav-icon-5 ${props.clicked ? "open" : ""}`}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    </div>
  )
}

export default BurguerButton

