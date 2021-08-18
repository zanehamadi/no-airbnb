import { useParams} from "react-router"
import { useEffect, useState } from "react"
import { addReview } from "../../store/reviews"
import { useDispatch, useSelector } from "react-redux"




export default function Planet({planets, users, solarSystems, reviews}){

    const session = useSelector(state => state.session);
    const planetIdObj = useParams()
    const planetId = planetIdObj.id
    const planet = planets?.find(planet => +planet.id === +planetId)
    const user = users?.find(user => +planet?.user_id === +user.id)
    const solarSystem = solarSystems?.find(solarSystem => +planet.solar_system_id === +solarSystem.id)
    const planetReviews = reviews?.filter(review => +review.planet_id ===  +planetId)
    let userId = undefined
    let reviewAndUsers = []
    let counter = 0
    let canReview = session.user !== undefined;

    if(session?.user !== undefined){
        userId = session.user?.id
    }


    

    planetReviews?.forEach(review => {
        let reviewObj = {}
        let description = review?.description
        reviewObj.description = description
        let user = users?.find(user => +user.id === +review.user_id)
        let username = user?.username
        reviewObj.username = username
        let date = (new Date(review.createdAt)).toDateString()
        reviewObj.date = date
        reviewAndUsers.push(reviewObj)
    })

    const dispatch = useDispatch()

    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')
    const [reviewValidations, setReviewValidations] = useState([])

    const submitFunc =  (e) => {
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


    useEffect(() => {
        let validations = []
        if(!rating) validations.push('Please entire a star rating')
        if(!description) validations.push('Please enter a review')

        setReviewValidations(validations)

    }, [rating, description])


    console.log('User ID:', userId)


    // useEffect(() => {

        if(userId){
            let reviewCheck = reviews.filter(review => (+review.user_id === +userId) && (+review.planet_id === +planetId))
            console.log(reviewCheck)
            if(reviewCheck.length) canReview = false;
        }
    // },[users, reviews])



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
        <h2>{planet && planet.name }</h2>
        <h2>{user && `Owned by ${user.username}`}</h2>
        <h3>{solarSystem && solarSystem.name}</h3>
        <h3>{planet && `Temperature: ${message}`}</h3>
        <h4>Reviews:</h4>
        <ul>
            {reviewAndUsers.map(review => <><li key={counter++}>{review && review.description }</li> <h4>{`posted by ${review && review.username} on ${review && review.date}`}</h4></>)}
        </ul>

        {console.log('Can Review:', canReview)}

        {canReview ? <div>
            <form onSubmit={submitFunc}>
                <h3>Have you been here? Post a review!</h3>
                <button type='button' value={1} onClick={() => setRating(1)}><i class="far fa-star"></i></button>
                <button type='button' value={2} onClick={() => setRating(2)}><i class="far fa-star"></i></button>
                <button type='button' value={3} onClick={() => setRating(3)}><i class="far fa-star"></i></button>
                <button type='button' value={4} onClick={() => setRating(4)}><i class="far fa-star"></i></button>
                <button type='button' value={5} onClick={() => setRating(5)}><i class="far fa-star"></i></button>

                <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
                <button disabled={reviewValidations.length > 0}>Post</button>
            </form>
        </div> : <></>}
        </>
    )
}