import { useEffect, useState } from "react"
import {Link} from 'react-router-dom';

let relevantPlanets;


export default function Search({solarSystems, planets}){
    
    const [temp, setTemp] = useState('')
    const [system, setSystem] = useState('')
    const [name, setName] = useState('')
    const [searchPlanets, setSearchPlanets] = useState([])

    console.log('BEFORE - Search Planets:', searchPlanets)


    useEffect(() => {
        console.log(temp);
        console.log(system);
        console.log(name);

        let planetsArr = planets

        if(name) {
            planetsArr = planetsArr.filter(planet => ((planet.name).toUpperCase()).includes((name.toUpperCase())))
        }

        // Yeah so basically I just remade startsWith() without knowing startsWith() existed 

        // if(name){


        //     planetsArr = planetsArr.filter(planet => {

        //         let splitName = ((planet.name).toUpperCase()).split('')
        //         let splitUserInput = (name.toUpperCase()).split('')
        //         let userInputLength = splitUserInput.length
        //         let checker = false
        //         while(userInputLength){
                    

        //             if(!(splitName[userInputLength - 1] === splitUserInput[userInputLength - 1])){
        //                 console.log('WE ARE HERE')
        //                 break
        //             }
                    
        //             userInputLength--
        //             if(userInputLength === 0){
        //                 checker = true
        //             }
        //         }



        //         if(checker === true){
        //             return planet
        //         }
        //     })
        // }

        if(temp){
            planetsArr = planetsArr.filter(planet => +temp === +planet.temperature)
        }
        console.log('Planets Arr:', planetsArr)


        if(system){
            let solarObj = solarSystems.find(sSystem => sSystem.name === system)
            let solarId = solarObj.id
            planetsArr = planetsArr.filter(planet => solarId === planet.solar_system_id)
        }
        
        console.log('Planets Arr2:', planetsArr)

        setSearchPlanets(planetsArr)

        console.log('AFTER - Search Planets:', searchPlanets)

    }, [temp, system, name])

//     <div>
//     {relevantPlanets ?                     
//     <ul>
//         {relevantPlanets.map(planet => <li><Link to={`/planets/${planet.id}`}>{planet.name}</Link></li>)}
//     </ul> 
//     : <></>}
// </div>

    return(
        <form>
            <input placeholder={'Planet Name'} value={name} onChange={e => setName(e.target.value)}></input>
            
            <label> Multiplanetary Systems
            <select value={system} onChange={e => setSystem(e.target.value)}>
                {solarSystems.map(system => <option key={system.id}>{system.name}</option>)}
            </select>
            </label>
            <label> Desired Temperature
                <input type='range' min='1' max='10'  value={temp} onChange={e => setTemp(e.target.value)}/> {temp}
            </label>


            <div>
                {searchPlanets ?                     
                <ul>
                    {searchPlanets.map(planet => <li><Link to={`/planets/${planet.id}`}>{planet.name}</Link></li>)}
                </ul> 
            : <></>}
            </div>


        </form>
    )
}

