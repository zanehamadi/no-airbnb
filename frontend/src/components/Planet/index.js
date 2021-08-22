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
    // const [randMsg, setRandMsg] = useState('')
    const [numTemp, setNumTemp] = useState('')

    // RATING-CLICK
    const ratingHandler = (e) => {
        const revRating = +(e.target.id[0])
        console.log(revRating)
        setRating(revRating)
        const stArr = Array.from(document.querySelectorAll(".fa-star"))
    
        for(let i = 0 ; i < revRating ; i++){
            stArr[i].classList.remove("far")
            stArr[i].classList.add("fas")

        }
        for(let i = revRating ; i < 5 ; i++){
            stArr[i].classList.remove("fas")
            stArr[i].classList.add("far")
        }
    }


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



    // let randNum = Math.floor(Math.random(1) * 7)


    // Caused too much lag
    // useEffect(() => {
    //     const temp = planet?.temperature
    //     const gr1 = ['"Freezing cold!"', '"My fingers hurt"', `"I can't feel my lips`, '"It hurts to blink"', `"I can't feel my face"`, `"I wish I brought a jacket"`, `"Freezing"`]
    //     const gr2 = ['"Feels like Cali!"', `"Nice swimmin' weather"`, '"Cozy coco nights"', `"Feels like home"`, `"Swim and snowboard in the same day"`, `"Like Earth!"`, `"Relaxation"`]
    //     const gr3 = ['"Someone turn the A/C on please"', '"I can see my sweat evaporating"', '"Definitely a sandals day"', `"Probably shouldn't have booked a week"`, `"Feels like being microwaved"`,`"The pavement feels like lava"`, `"What a mistake"`]
    //     const gr4 = ['"Eyes may burn out of socket"', '"Body hair will be flammable"', '"Hell"', `"Everything burns"`, `"It hurts to breathe"`, `"Feels like you're walking on the surface of a star"`, `"DON'T COME HERE"`]


    //     if (temp <= 2)  setRandMsg(gr1[randNum])
    //     else if (temp === 3) setRandMsg(gr2[randNum])
    //     else if (temp <= 6)  setRandMsg(gr3[randNum])
    //     else if (temp <= 10) setRandMsg(gr4[randNum])
    // });


    useEffect(() => {

        const temp = planet?.temperature

        if(temp === 1) setNumTemp('−273.15°C - -129°C')
        if(temp === 2) setNumTemp('-130°C - -21°C')
        if(temp === 3) setNumTemp('-20°C - 69°C')
        if(temp === 4) setNumTemp('70°C - 259°C')
        if(temp === 5) setNumTemp('260°C - 539°C')
        if(temp === 6) setNumTemp('600°C - 1369°C')
        if(temp === 7) setNumTemp('1370°C - 2759°C')
        if(temp === 8) setNumTemp('2760°C - 3309°C')
        if(temp === 9) setNumTemp('3310°C - 3869°C')
        if(temp === 10)setNumTemp('3870+°C ')

    })


    return(

        <>
        {
        planet ?
        <>
        <h1 id="planetName">{planet && planet.name }</h1>
        { planet?.imgUrl ? <img src={`${planet?.imgUrl}`}/> : <></> }
        <div className="ownerNameDisplay"> <h2>Owned by <Link to={`/users/${user?.id}`} id="planetOwner">{user && `${user.username}`}</Link></h2> </div>
        <h3>{solarSystem && solarSystem.name}</h3>
        <h3>{planet && `Temperature: ${numTemp}`}</h3>
        {/* <h4 id="randMsg"><em>{randMsg}</em></h4> */}
        {reviewAndUsers.length ? 
            <> 
                <h3 id="revHeader">Reviews:</h3>  
                {reviewAndUsers.map(review => 
                    <div className="reviewBlock">
                        <div key={review?.id} className="reviewContent">{review && review.description }</div>  
                        <div className="reviewStars reviewContent">{review.stars}</div> 
                        <h4 className="postedLine reviewContent"> posted by <Link to={`/users/${review.userId}`} className="userReviewLink">{review && review.username}</Link> {`on ${review && review.date}`}</h4> 
                    </div>
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
            <form onSubmit={submitReviewFunc} className="reviewForm">
                <h3>Have you been here? Post a review!</h3>
                <ul>
                    {
                    reviewValidations ? 
                    <>
                        {reviewValidations.map(valid => <li>{valid}</li>)}
                    </> 
                    : 
                    <></>}
                </ul>
                <span>
                <span id="ratingText">Rating:</span>
                <span onClick={ratingHandler}><i className="far fa-star" id="1star"></i></span>
                <span onClick={ratingHandler}><i className="far fa-star" id="2star"></i></span>
                <span onClick={ratingHandler}><i className="far fa-star" id="3star"></i></span>
                <span onClick={ratingHandler}><i className="far fa-star" id="4star"></i></span>
                <span onClick={ratingHandler}><i className="far fa-star" id="5star"></i></span>
                </span>
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