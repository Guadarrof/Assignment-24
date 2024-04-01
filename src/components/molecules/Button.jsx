import React from 'react'

const Button = ({className, btnText, action}) => {
  return (
    <button className={className} onClick={action}>{btnText}</button>
  )
}

export default Button