import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars, faBell  } from '@fortawesome/free-solid-svg-icons'
const NavbarGithub = () => {

    // CSS StyleSheet
    const divStyle = {
        display: 'flex', 
        justifyContent:'space-between', 
        margin: 0, 
        background:'black'
    }

    const p0Style = {
        padding: '0 1em', 
        color: 'white'
    }

    const p1Style = {
        color: 'white'
    }

    return (
        <div data-testid="navbar" style={divStyle}>
            <p style={p0Style}><FontAwesomeIcon  icon={faBars} size="2x"/></p>
            <p style={p1Style}><FontAwesomeIcon  icon={faGithub} size="2x"/></p>
            <p style={p0Style}><FontAwesomeIcon  icon={faBell} size="2x"/></p>
        </div>
    )
}

export default NavbarGithub
