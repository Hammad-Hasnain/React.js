import React from 'react'

const Button = ({ btnTxt, onClickTrigger }) => <button onClick={onClickTrigger} style={{ cursor: 'pointer' }}> {btnTxt}</button>


export default Button