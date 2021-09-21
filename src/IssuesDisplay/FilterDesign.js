import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faCaretDown, faTags } from '@fortawesome/free-solid-svg-icons'

const FilterDesign = () => {

    // CSS StyleSheet
    const div0Style = {
        padding:'0 1em', 
        display:'flex', 
        justifyContent:'space-between'
    }

    const div1Style = {
            display: 'flex'
    }

    const p0Style = {
        margin: '1em'
    }

    const p1Style = {
        paddingRight: '1em'
    }

    const p2Style = {
        padding: '0 0.5em', 
        background: 'green', 
        color: 'white', 
        borderRadius: '10px'
    }

    return (
        <div style={div0Style}>
            <div style={div1Style}>
                <p style={p0Style}>Filters <FontAwesomeIcon icon={faCaretDown}/></p>
                <input placeholder="is:issue is:open"/>
            </div>
            <div style={div1Style}>
                <p style={p1Style}><FontAwesomeIcon icon={faTags}/> Labels</p>
                <p style={p1Style}><FontAwesomeIcon icon={faBullseye}/> Milestones</p>
                <p style={p2Style}>New issue</p>
            </div>
        </div>
    )
}

export default FilterDesign
