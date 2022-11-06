import React from 'react'
import pic from './hero/illustration-hero (1).svg'
import Body from './Body'
import Plan from './Plan'
import Button from './Button'
import './Header.css'
import logo from './hero/pattern-background-desktop.svg'
function Header() {
    return (
        <body className='content'>
            <img src={logo} alt="" /> 

            <div className='container'>
                <img className='img-hero' src={pic} alt="" /> <br />
                <Body />  <br />
                <Plan /> <br />
                <Button /> <br />
            </div>

        </body>

    )
}

export default Header