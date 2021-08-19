import {Link} from 'react-router-dom';


export default function Planets({planets}){


    return(
        <>
        <h2>Choose a Planet to visit</h2>
        <div>
            {planets.map(planet => <div key={planet.id}> <Link to={`/planets/${planet.id}`} key={planet.id}> {planet.name}</Link></div>)}

        </div>
            
        </>
    )
}