import React, {useState, useEffect} from 'react'
import { formatDistance, subDays } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';
import '../App.css'

const DisplayIssues = () => {

    const [issues, setIssues] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/repos/octocat/hello-world/issues")
        .then(res => res.json())
        .then(data => setIssues(data));
    }, [])


    // CSS StyleSheet
    const div0Style = {
        display:'flex', 
        justifyContent:'space-between'
    }

    const div1Style = {
        display:'flex'
    }

    const div2Style = {
        marginRight:'0.3em'
    }

    const p0Style = {
        margin: '1em', 
        color: 'green'
    }

    const p1Style = {
        opacity: '0.5'
    }


    return (
        <div>
             {issues.map((data,i)=> (
                <div key={i} className="border" style={div0Style}> 
                    
                    <div style={div1Style}>
                        <p style={p0Style}><FontAwesomeIcon icon={faDotCircle}/></p>
                        <div>
                            <p>{data.title}</p>
                            <p style={p1Style}>#{data.number} opened {formatDistance(subDays(new Date(data.updated_at), 3), new Date(), { addSuffix: true })} by {data.user.login}</p>
                        </div>
                    </div>
                    <div style={div2Style}>
                        {data.comments > 0?<p><FontAwesomeIcon icon={faFacebookMessenger}/> {data.comments}</p>: ""}
                    </div>    
                </div>
            ))}
        </div>
    )
}

export default DisplayIssues
