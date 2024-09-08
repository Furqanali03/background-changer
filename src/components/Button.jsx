// Button.js
import React from 'react'

const Button = (props) => {
  return (
    <>
      <button
        onClick={() => props.handleClick(props.color)}
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{ backgroundColor: props.color }}
        type="button"
      >
        {props.color}
      </button>
    </>
  )
}

export default Button
