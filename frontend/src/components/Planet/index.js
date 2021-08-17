import { useParams} from "react-router"




export default function Planet({planets, users, solarSystems}){
    const planetIdObj = useParams()
    const planetId = planetIdObj.id
    const planet = planets.find(planet => +planet.id === +planetId)
    const user = users.find(user => +planet.user_id === +user.id)
    const solarSystem = solarSystems.find(solarSystem => +planet.solar_system_id === +solarSystem.id)

    let randNum = Math.floor(Math.random(1) * 3)

    let message = (() => {
        const temp = planet && planet.temperature
        const gr1 = ['Freezing cold!', 'My fingers hurt', "I can't feel my lips"]
        const gr2 = ['Feels like Cali!', "Nice swimmin' weather", "Cozy coco nights"]
        const gr3 = ['Someone turn the A/C on please', 'I can see my sweat evaporating', 'Definitely a sandals day']
        const gr4 = ['Eyes may burn out of socket', 'Body hair will be flammable', 'Hell']

        if (temp <= 2) return gr1[randNum]
        else if (temp === 3) return gr2[randNum]
        else if (temp <= 6) return gr3[randNum]
        else if (temp <= 10) return gr4[randNum] 
    })()

    
    return(
        <>
        <h2>{planet && planet.name }</h2>
        <h2>{user && `Owned by ${user.username}`}</h2>
        <h3>{solarSystem && solarSystem.name}</h3>
        <h3>{planet && `Temperature: ${message}`}</h3>
        </>
    )
}