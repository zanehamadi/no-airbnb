import {csrfFetch} from './csrf'

const LOAD_REVIEWS = "reviews/LOAD_REVIEWS";

const POST_REVIEW = 'reviews/POST_REVIEW';

const DELETE_REVIEW = 'reviews/DELETE_REVIEW';


const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
});

const postReview = (review) => ({
    type: POST_REVIEW,
    review
})

const deleteReview = (id) => ({
    type: DELETE_REVIEW,
    id
})


export const getReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews');
    if(response.ok){
        const reviews = await response.json();
        dispatch((loadReviews(reviews)))
    }
};

export const addReview = (formData) => async (dispatch) => {

    const response = await csrfFetch('/api/reviews', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData)
    });


    if(response.ok){
        const userReview = await response.json();
        dispatch(postReview(userReview));
        return userReview;
    };

};



export const destroyAReview = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'delete'
    });

    if(response.ok){
        dispatch(deleteReview(id));
        return
    }
}




// export const deleteAReview = (formData) => async(dispatch) => {
//     const response = await csrfFetch('/api/reviews', {
//         method: 'delete',
//         headers: {'Content-Type':'application/json'},
//         body: JSON.stringify(formData)
//     })

//     if(response.ok){
//         const reviewId = await response.json();
//         dispatch(deleteReview(reviewId));
//         return reviewId
//     }
// }

const initialState = {}

const reviewReducer = (state = initialState, action ) => {

    switch(action.type) {
        case LOAD_REVIEWS: {
            const allReviews = {};
            action.reviews.forEach(review => {
                allReviews[review.id] = review
            })
            return allReviews
        }

        case POST_REVIEW: {
            if(!state[action.review.id]){
                const newState = {
                    ...state,
                    [action.review.id]: action.review
                };
                return newState
            }
            else return{
                ...state,
                [action.review.id]: {
                    ...state[action.review.id],
                    ...action.review
                }
            };
        }

        // case DELETE_REVIEW: {
        //     return{
        //         ...state,
        //         [action.review.id]:{
        //             ...state[action.review.id],
        //             ...action.review
        //         }
        //     }
        // }

        case DELETE_REVIEW: {
            const newState = {...state};
            delete newState[action.id];
            return newState
        }

        default:
            return state;
    }
}


export default reviewReducer