import {React,useState} from 'react'
import team from '../Util/team'

const Team = () => {
    const [say, setSay] = useState(team)
    return (
        <div className="quotes">
            <div className="flex">
                {say.map((quotes)=>{
                    const {id,name,graduation,role,major,img} = quotes;
                    return(
                        <div className="quote-card" key={id}>
                            <img src={img} alt="" />
                            <h3>{name}</h3>
                            <hr />
                            <p>{major}</p>
                            <p>{graduation}</p>
                            <p>{role}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Team
