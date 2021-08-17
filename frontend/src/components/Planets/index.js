import { useDispatch, useSelector } from "react-redux"
import { getPlanets } from "../../store/planets"
import { useEffect } from "react";




export default function Planets(){
    const planetsSlice = useSelector(state => state.planets)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPlanets()); 
    },[dispatch])

    const planets = Object.values(planetsSlice) // We are converting our slice of state(that is an object) into an Array.

    return(
        <>
        <h2>Choose a Planet to visit</h2>
        <ul>
            
            {planets.map(planet => <li key={planet.id}>{planet.name}</li> )}

        </ul>
            
        </>
    )
}