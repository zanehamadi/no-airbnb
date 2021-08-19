import { useParams} from "react-router"
import { useEffect, useState } from "react"
import { addReview } from "../../store/reviews"
import {bookDate} from "../../store/bookings"
import { useDispatch, useSelector } from "react-redux"
import Calendar from 'react-calendar';
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import './planet.css' 




export default function Planet({planets, users, solarSystems, reviews, bookings}){

    const session = useSelector(state => state.session);
    const planetIdObj = useParams()
    const planetId = planetIdObj.id
    const planet = planets?.find(planet => +planet?.id === +planetId)
    const user = users?.find(user => +planet?.user_id === +user.id)
    const solarSystem = solarSystems?.find(solarSystem => +planet?.solar_system_id === +solarSystem?.id)
    let history = useHistory()

    const historyRedirect = () => {
        history.push('/')
    }
    


    let reviewAndUsers = []
    
    let counter = 0
    let canReview = session.user !== undefined;
    
    // const [userReview, setUserReview] = useState('');


    let planetReviews = reviews?.filter(review => {
        if (+review?.planet_id ===  +planetId) return true;
    })

    
    planetReviews?.forEach(review => {
        let reviewObj = {}
        let description = review?.description
        reviewObj.description = description
        let user = users?.find(user => +user.id === +review.user_id)
        let userId = user?.id
        reviewObj.userId = userId
        let username = user?.username
        reviewObj.username = username
        let date = (new Date(review.createdAt)).toDateString()
        reviewObj.date = date

        let stars = ''
        if(review?.rating === 1) stars = '⭐'
        if(review?.rating === 2) stars = '⭐⭐'
        if(review?.rating === 3) stars = '⭐⭐⭐'
        if(review?.rating === 4) stars = '⭐⭐⭐⭐'
        if(review?.rating === 5) stars = '⭐⭐⭐⭐⭐'
        reviewObj.stars = stars


        reviewAndUsers.push(reviewObj)
    })

    console.log('reviewAndUser', reviewAndUsers)

    const dispatch = useDispatch()

    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [reviewValidations, setReviewValidations] = useState([]);
    const [userId, setUserId] = useState(null);
    const [date, setDate] = useState(new Date());
    const [bookingCheck, setBookingCheck] = useState(true)


    console.log('DATE:', date[0])
    useEffect(() => {
        setBookingCheck(true)
        let startInputDate = date[0]
        let endInputDate = date[1]
        console.log('BOOKING DATE HAS CHANGED')

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

        if(bookings.length){
            bookings.forEach(booking => {
                if(+booking.planet_id === +planetId) setBookingCheck(false)
            })
        }
            
    }, [bookings, date])

    useEffect(() => {
        if(session?.user !== undefined){
            setUserId(session.user?.id)
        }
    },[session])


    const submitReviewFunc =  (e) => {
        e.preventDefault();

        const review = {
            user_id:session.user.id,
            planet_id: planetId,
            description,
            rating
        }

       dispatch(addReview(review));

       setRating('')
       setDescription('')
       

    }

    const submitBookingFunc = (e) => {
        e.preventDefault();

        let startDate = (date[0]).toString()
        let endDate = (date[0]).toString()

        console.log('TEST STRING:', startDate)
        console.log('TYPE OF TEST STRING:', typeof startDate)
        const bookedDate = {
            startDate,
            endDate,
            user_id: +userId,
            planet_id: planetId
        }

        dispatch(bookDate(bookedDate));

        setDate(new Date());

    }


    useEffect(() => {
        let validations = []
        if(!rating) validations.push('Please enter a star rating')
        if(!description) validations.push('Please enter a review')

        setReviewValidations(validations)

    }, [rating, description])




    if(userId){
        let reviewCheck = reviews.filter(review => (+review.user_id === +userId) && (+review.planet_id === +planetId))
        if(reviewCheck.length) canReview = false;
    }



    let randNum = Math.floor(Math.random(1) * 3)

    let message = (() => {
        const temp = planet?.temperature
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
        {
        planet ?
        <>
        <h2>{planet && planet.name }</h2>
        <div className="ownerNameDisplay"> <h2>Owned by <Link to={`/users/${user?.id}`}>{user && `${user.username}`}</Link></h2> </div>
        <h3>{solarSystem && solarSystem.name}</h3>
        <h3>{planet && `Temperature: ${message}`}</h3>
        {reviewAndUsers.length ? 
            <> 
                <h4>Reviews:</h4>  
                {reviewAndUsers.map(review => 
                    <>
                        <div key={review?.id}>{review && review.description }</div>  
                        <div>{review.stars}</div> 
                        <h4> posted by <Link to={`/users/${userId}`}>{review && review.username}</Link> {`on ${review && review.date}`}</h4> 
                    </>
                )}  

            </>
            : 
            <>
                <h4>No reviews yet.</h4>
            </>}   
       
        {userId && (
            <div>
                <form onSubmit={submitBookingFunc}>
                    <h3>Book a date</h3>
                    <Calendar value={date} onChange={setDate} selectRange={true}/>
                    
                    {bookingCheck ? 
                    
                    <div>
                        <button onClick={() => alert('Date has been booked!')}>Book Date</button>
                    </div> 
                    
                    : 
                    
                    <div>
                        <h3> Date already booked. </h3>
                    </div>
                    }
                </form>
            </div>
        )}

        {userId && canReview && (<div>
            <form onSubmit={submitReviewFunc}>
                <h3>Have you been here? Post a review!</h3>
                <button type='button' value={1} onClick={() => setRating(1)}><i class="far fa-star"></i></button>
                <button type='button' value={2} onClick={() => setRating(2)}><i class="far fa-star"></i></button>
                <button type='button' value={3} onClick={() => setRating(3)}><i class="far fa-star"></i></button>
                <button type='button' value={4} onClick={() => setRating(4)}><i class="far fa-star"></i></button>
                <button type='button' value={5} onClick={() => setRating(5)}><i class="far fa-star"></i></button>

                <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
                <button disabled={reviewValidations.length > 0}>Post</button>
            </form>
        </div>)}
        </> :
        <>
        <h2>
            Planet Not Found.
        </h2>
        <button onClick={historyRedirect}>Return Home.</button>
        </>
        }
        </>
    )
}