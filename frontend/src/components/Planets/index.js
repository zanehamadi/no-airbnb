import {Link} from 'react-router-dom';
import "./planets.css"


export default function Planets({planets}){
    console.log(planets)


    return(
        <div className="planetPageContainer">
            <h2>Choose a Planet to visit</h2>
            <div className="planetContainer">
                {planets.map(planet => 
                    <div key={planet.id}>
                        <Link to={`/planets/${planet.id}`} key={planet.id} className="planetsResults">
                        <img src={planet?.imgUrl}/> 
                            {planet.name}
                        </Link>
                    </div>)}

            </div>
            
        </div>
    )
}