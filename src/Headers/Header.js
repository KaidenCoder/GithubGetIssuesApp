import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faCaretDown, faCodeBranch, faEye, faStar } from '@fortawesome/free-solid-svg-icons'
import { API_REPO } from '../APIS/constants'

const Header = () => {

    const [repovalue, setRepoValue] = useState({})

    useEffect(() => {
        fetch(API_REPO)
        .then(response => response.json())
        .then(data => setRepoValue(data))
    }, [])

    // CSS StyleSheet
    const div0Style = {
        display:'flex', 
        justifyContent:'space-between'
    }

    const div1Style = {
        display:'flex'
    }

    const p0Style = {
        padding:'0 1em'
    }

    const p1Style = {
        padding:'0 0.4em', 
        border:'1px solid grey', 
        borderRadius: '10px'
    }

    const p2Style = {
        marginRight: '1em',
        padding:'0 0.4em', 
        border:'1px solid grey', 
        borderRadius: '10px'
    }

    return (
        <div>
            <div style={div0Style}>
                <div style={div1Style}>
                    <p style={p0Style}><FontAwesomeIcon icon={faBookmark}/>octocat/Hello-World</p>
                    <p style={p1Style}>Public</p>
                </div>
                <div style={div1Style}>
                    <p style={p2Style}><FontAwesomeIcon icon={faEye}/> Watch <FontAwesomeIcon icon={faCaretDown}/> | {repovalue.watchers_count}</p>
                    <p style={p2Style}><FontAwesomeIcon icon={faStar}/> Star | {repovalue.stargazers_count}</p>
                    <p style={p2Style}><FontAwesomeIcon icon={faCodeBranch}/>Fork | {repovalue.forks}</p>
                </div>
            </div>
        </div>
    )
}

export default Header
