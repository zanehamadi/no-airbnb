import {Link} from 'react-router-dom';


export default function Planets({planets}){


    return(
        <>
        <h2>Choose a Planet to visit</h2>
        <ul>
            {planets.map(planet => <li key={planet.id}> <Link to={`/planets/${planet.id}`} key={planet.id}> {planet.name}</Link></li>)}

        </ul>
            
        </>
    )
}