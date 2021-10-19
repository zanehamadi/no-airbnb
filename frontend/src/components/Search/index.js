import { useEffect, useState } from "react"
import {Link} from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './search.css'




export default function Search({solarSystems, planets, bookings}){
    
    const [temp, setTemp] = useState('')
    const [system, setSystem] = useState('All')
    const [name, setName] = useState('')
    const [searchPlanets, setSearchPlanets] = useState([])
    // const [startDate, setStartDate] = useState('')
    // const [endDate, setEndDate] = useState('')
    const [date, setDate] = useState(new Date())
    const [flexible, setFlexible] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [display, setDisplay] = useState('inline')


    useEffect(() => {
        if(showSearch) setDisplay('none')
        else setDisplay('inline')
    },[showSearch])





    useEffect(() => {

        
        if((name || temp) || (system )){
            
            let planetsArr = planets
            
            if(name) {
                planetsArr = planetsArr.filter(planet => ((planet.name).toUpperCase()).includes((name.toUpperCase())))
            }

            
            if(temp){
                planetsArr = planetsArr.filter(planet => +temp === +planet.temperature)
            }

            if(system !== 'All') {
                let solarObj = solarSystems.find(sSystem => sSystem?.name === system)
                let solarId = solarObj?.id
                planetsArr = planetsArr.filter(planet => solarId === planet.solar_system_id)
            }

            if(date){
                let startInputDate = date[0]
                let endInputDate = date[1]
    
                bookings = bookings.filter(booking => {
                    
    
                    if((new Date(booking.startDate)) === startInputDate) return true
                    if((new Date(booking.endDate)) === endInputDate) return true
    
                    // desiredDate starts before bookedDate && desiredDate ends after bookDate starts
                    if((startInputDate <= (new Date(booking.startDate))) && (endInputDate >= (new Date(booking.endDate)))) return true;
                    // bookDate starts before desiredDate && desiredDate ends before bookDate
    
                    if(((new Date(booking.startDate)) <= startInputDate) && (endInputDate <= (new Date(booking.endDate)))) return true;
    
                    // bookDate starts before desiredDate && desiredDate starts before bookDate ends
                    if(((new Date(booking.startDate)) <= startInputDate) && (startInputDate <= (new Date(booking.endDate)))) return true;
    
                    // bookDate starts before desiredDate ends && desiredDate ends before bookDate ends
                    if(((new Date(booking.startDate)) <= endInputDate) && (endInputDate <= (new Date(booking.endDate)))) return true;
    
                    // desiredDate ends before bookedDate starts && bookedDate ends before desiredDate ends
                    if((endInputDate < (new Date(booking.startDate)))  && ((new Date(booking.endDate)) < endInputDate)) return true;
                    return false
                })
    
                planetsArr = planetsArr.filter(planet => {
                    let checker = true
    
                    bookings.forEach(booking => {
                        if(+booking.planet_id === +planet.id){
                            checker = false
                        }
                    })
                    return checker
                })
            }
            if(date[1] || (name || temp || system !== 'All')){
                setSearchPlanets(planetsArr)
            }
        }


        



    }, [temp, system, name, date])


    const resetFunction = () => {
        setTemp('')
        setSystem('All')
        setName('')
        setDate(new Date())
        setSearchPlanets([])
    }


    return(
        <div className='searchContainer'>
            <h2>Find your destination.</h2>
            <form id='searchForm'>
                <label> Name
                    <input placeholder={'Planet Name'} value={name} className="searchInput" onChange={e => setName(e.target.value)} ></input>
                </label>

                <label> Multiplanetary Systems
                <select id="systemSelect" value={system} onChange={e => setSystem(e.target.value)}>
                    <option key='7331'>All</option>
                    {solarSystems.map(system => <option className="systemSelectSpec" key={system.id}>{system.name}</option>)}
                </select>
                </label>
                <label> Desired Temperature
                   <span> <input type='range' min='1' max='10'  value={temp} onChange={e => setTemp(e.target.value)}    id="tempScale"/> {temp} </span>
                </label>
                <label>
                    {/* <input type='date' value={startDate} onChange={e => setStartDate(e.target.value)}/> */}
                    Duration of stay
                    <Calendar value={date} onChange={setDate} selectRange={true} className="searchCalendar"/>
                </label>
                <span className="resetButton" onClick={ () => resetFunction()}>Reset</span>


                <div className="searchResults">
                    {searchPlanets.length !== 0 ?                     
                        searchPlanets.map(planet => <div><Link to={`/planets/${planet.id}`} className='oneResult'>{planet.name} </Link></div>)
                : <></>}

                </div>


            </form>
        </div>
        
    )
}

