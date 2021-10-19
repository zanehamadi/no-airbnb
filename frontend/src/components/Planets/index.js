import {Link} from 'react-router-dom';
import "./planets.css"


export default function Planets({planets}){
    console.log(planets)


    return(
        <div className="planetPageContainer">
            <h2 id="planetPageHeader">Choose a Planet to visit</h2>
            <div className="planetContainer">
                {planets.map(planet => 
                    <div key={planet.id} className="specPlanetDiv">
                        <Link to={`/planets/${planet.id}`} key={planet.id} className="planetsResults">
                        <img src={planet?.imgUrl}/> 
                        <h3 id="planetPagePlanetName"> {planet.name} </h3>
                        </Link>
                    </div>)}

            </div>
            
        </div>
    )
}