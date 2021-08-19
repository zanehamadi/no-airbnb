import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function User({planets, bookings, reviews, users}){
    
    const session = useSelector(state => state.session);
    const loggedUser = session.user ? session.user : ''
    const {id} = useParams()
    const user = users?.find(specUser => +specUser.id === +id)
    const yourprofile = session?.user ? +user?.id === +session?.user.id : false 


    const [userBookings, setUserBookings] = useState([]);
    const [userPlanets, setUserPlanets] = useState([]);
    const [userReviews, setUserReviews] = useState([]);



    useEffect(() => {

        let formattedReviews = []
        let formattedBookings = []

        let relevantBookings = bookings.filter(booking => +booking?.user_id === +user?.id)
        let relevantReviews = reviews.filter(review => +review?.user_id === +user?.id)
        let relevantPlanets = planets.filter(planet => +planet?.user_id === +user?.id)


        setUserPlanets((planets.filter(planet => +planet?.user_id === +user?.id)))

        console.log(relevantBookings)

        relevantBookings?.forEach(booking => {
            let bookingObj = {}
            let startDate = new Date(booking.startDate)
            startDate = startDate.toString()
            startDate = startDate.split(' ')
            startDate = `${startDate[0]}, ${startDate[1]} ${startDate[2]}, ${startDate[3]}`
            bookingObj.startDate = startDate

            
            let endDate = new Date(booking.endDate)
            endDate = endDate.toString()
            endDate = endDate.split(' ')
            endDate = `${endDate[0]}, ${endDate[1]} ${endDate[2]}, ${endDate[3]}`
            bookingObj.endDate = endDate
            
            let planet = planets.find(planet => +planet.id === +booking.planet_id )
            let planetId = planet.id
            bookingObj.planetId = planetId
            planet = planet.name

            bookingObj.planet = planet

            formattedBookings.push(bookingObj)

        })


        relevantReviews?.forEach(review => {
            let reviewObj = {}
            let description = review?.description
            reviewObj.description = description
            let username = user?.username
            reviewObj.username = username
            let stars = ''
            if(review?.rating === 1) stars = '⭐'
            if(review?.rating === 2) stars = '⭐⭐'
            if(review?.rating === 3) stars = '⭐⭐⭐'
            if(review?.rating === 4) stars = '⭐⭐⭐⭐'
            if(review?.rating === 5) stars = '⭐⭐⭐⭐⭐'
            reviewObj.stars = stars

            let planet = planets.find(planet => +planet.id === +review.planet_id )
            planet = planet.name

            reviewObj.planet = planet
            formattedReviews.push(reviewObj)
        })

        setUserReviews(formattedReviews)
        setUserBookings(formattedBookings)
        setUserPlanets(relevantPlanets)
        
    }, [bookings, planets, reviews])


    console.log('Booking:', userBookings)
    console.log('Planets:', userPlanets)
    console.log('Reviews:', userReviews)







    
    return(

        <div>
            <h2>{`${user?.username}'s profile`}</h2>
            {userReviews ? 
            <div>
                <h3>Reviews</h3>
                {userReviews.map(review => 
                <>
                <div>{`"${review.description}" - ${review.planet}`}</div>
                {review.stars} {yourprofile ? <div><button>delete</button> </div> : <></>}
                </>
                )
            }
            </div> : 
            <></>}

            {yourprofile && userBookings ? 
            <>
                    <h3>Bookings</h3>
                    { userBookings?.map(booking => 
                    <>
                        <div> 
                            <Link to={`/planets/${booking.planetId}`}>{booking.planet}</Link>{` on ${booking.startDate} to ${booking.endDate}`}
                            <button>delete</button>
                        </div>
                    </>
                    )} 
            </>
            : <></>}

            {userPlanets.length !== 0 ? 
            <div>
                <h2>{`${user?.username}'s Planets`}</h2>
                {userPlanets.map(planet => 
                    <div>
                        <Link to={`/planets/${planet.id}`}>
                            {planet.name}
                        </Link>
                    </div>)}
            </div>
            :
            <>
            </>
            }
            
        </div>

    )
}