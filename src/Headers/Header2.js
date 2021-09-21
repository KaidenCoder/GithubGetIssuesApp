import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDotCircle, faCodeBranch, faPlayCircle, faTasks, faBookOpen, faShieldVirus, faChartLine } from '@fortawesome/free-solid-svg-icons'

const Header2 = () => {

    // CSS StyleSheet
    const divStyle = {
        display:'flex', 
        justifyContent:'center', 
        margin:'1em 0'
    }

    const pstyle = {
        margin: '0 1em'
      };

    return (
        <div style={divStyle}>
            <p style={pstyle}><FontAwesomeIcon icon={faCode}/> Code</p>
            <p style={pstyle}><FontAwesomeIcon icon={faDotCircle}/> Issues</p>
            <p style={pstyle}><FontAwesomeIcon icon={faCodeBranch}/> Pull requests</p>
            <p style={pstyle}><FontAwesomeIcon icon={faPlayCircle}/> Actions</p>
            <p style={pstyle}><FontAwesomeIcon icon={faTasks}/> Projects</p>
            <p style={pstyle}><FontAwesomeIcon icon={faBookOpen}/> Wiki</p>
            <p style={pstyle}><FontAwesomeIcon icon={faShieldVirus}/> Security</p>
            <p style={pstyle}><FontAwesomeIcon icon={faChartLine}/> Insights</p>
        </div>
    )
}


export default Header2
