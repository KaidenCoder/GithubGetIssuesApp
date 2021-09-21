import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faDotCircle } from '@fortawesome/free-solid-svg-icons'

const TopIssue = () => {

    // CSS StyleSheet
    const div0Style = {
        justifyContent:'space-between', padding: '1em 0'
    }

    const div1Style = {
        display:'flex'
    }

    const pStyle = {
        margin: '0 1em'
    }

    return (
        <div className="border" style={div0Style}>
            <div style={div1Style}>      
                <p style={pStyle}><FontAwesomeIcon icon={faDotCircle}/> 301 Open</p>
                <p style={pStyle}>284 Closed</p>
            </div>
            <div style={div1Style}>
                <p style={pStyle}>Author <FontAwesomeIcon icon={faCaretDown}/> </p>
                <p style={pStyle}>Label <FontAwesomeIcon icon={faCaretDown}/> </p>
                <p style={pStyle}>Assignee <FontAwesomeIcon icon={faCaretDown}/> </p>
                <p style={pStyle}>Sort <FontAwesomeIcon icon={faCaretDown}/> </p>
            </div>
        </div>
    )
}

export default TopIssue
