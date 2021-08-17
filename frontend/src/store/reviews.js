const LOAD_REVIEWS = "reviews/LOAD_REVIEWS";


const loadReviews = (reviews) => ({
    type: LOAD_REVIEWS,
    reviews
});



export const getReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews');
    if(response.ok){
        const reviews = await response.json();
        dispatch((loadReviews(reviews)))
    }
};

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

        default:
            return state;
    }
}


export default reviewReducer