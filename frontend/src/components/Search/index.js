import { useEffect, useState } from "react"
import {Link} from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// let relevantPlanets;


export default function Search({solarSystems, planets, bookings}){
    
    const [temp, setTemp] = useState('')
    const [system, setSystem] = useState('')
    const [name, setName] = useState('')
    const [searchPlanets, setSearchPlanets] = useState([])
    // const [startDate, setStartDate] = useState('')
    // const [endDate, setEndDate] = useState('')
    const [date, setDate] = useState(new Date())

    console.log('BEFORE - Search Planets:', searchPlanets)


    useEffect(() => {
        console.log('Temp:', temp);
        console.log('System:', system);
        console.log('Name:', name);
        console.log('Booked', bookings[0])
        console.log('Date:', date);
        // console.log('startDate:', startDate)
        // console.log('endDate:', endDate)

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


        if(system) {
            let solarObj = solarSystems.find(sSystem => sSystem.name === system)
            let solarId = solarObj.id
            planetsArr = planetsArr.filter(planet => solarId === planet.solar_system_id)
        }

        // if(startDate && endDate){

        //     let cantBook = bookings.filter(booking => {
        //         console.log('Start Date Comparison - booking.startDate: ', booking.startDate)

        //         let isBooked = false;
        //         let badBookedArr = booking.startDate.split('-')
        //         let badBookedEndArr = booking.endDate.split('-')
        //         let bookedArr = []
        //         let bookedEndArr = []
        //         let cleanUp = 0;

        //         let startDateInput = startDate.split('-')
        //         let endDateInput = endDate.split('-')


        //         while(cleanUp < 3){
        
        //             if(cleanUp === 2){
        //                 let badFormatDay = badBookedArr[cleanUp]
        //                 let betterFormatDayLetters = badFormatDay.split('')
        //                 let betterFormatDay = betterFormatDayLetters[0] + betterFormatDayLetters[1]

        //                 let badFormatEndDay = badBookedEndArr[cleanUp]
        //                 let betterFormatEndDayLetters = badFormatEndDay.split('')
        //                 let betterFormatEndDay = betterFormatEndDayLetters[0] + betterFormatEndDayLetters[1]

        //                 bookedArr.push(betterFormatDay)
        //                 bookedEndArr.push(betterFormatDay)
        //                 break
        //             }

        //             bookedEndArr.push(badBookedEndArr[cleanUp])
        //             bookedArr.push(badBookedArr[cleanUp])
        //             cleanUp++
        //         }

                
        //         let bookedDate = bookedArr.join('-')
        //         let bookedEndDate = bookedEndArr.join('-')

        //         console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

        //         console.log('bookedDate:', bookedDate)
        //         console.log('startDate:', startDate)

        //         console.log('bookedEndDate:', bookedEndDate)
        //         console.log('endDate:', endDate)

        //         console.log('bookedArr:', bookedArr)
        //         console.log('startDateInput:', startDateInput)

        //         console.log('bookedEndArr:', bookedEndArr)
        //         console.log('endDateInput:', endDateInput)

        //         console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')




        //     })

        // }

        if(date){
            let startInputDate = date[0]
            let endInputDate = date[1]

            bookings.filter(booking => endInputDate >= ((booking.startDate).toString()) && (startInputDate <= (booking.endDate)).toString())
            bookings.forEach(booking => console.log( (booking.startDate).toString() ) )
        }
        
        console.log('Planets Arr2:', planetsArr)

        setSearchPlanets(planetsArr)

        console.log('AFTER - Search Planets:', searchPlanets)

    }, [temp, system, name, date])

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
            <label>Duration of stay
                {/* <input type='date' value={startDate} onChange={e => setStartDate(e.target.value)}/> */}
                <Calendar value={date} onChange={setDate} selectRange={true}/>
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

