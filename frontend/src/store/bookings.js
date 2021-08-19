import {csrfFetch} from './csrf';


const LOAD_BOOKINGS = "bookings/LOAD_BOOKINGS";
const BOOK_DATE = "bookings/BOOK_DATE";



const loadBookings = (bookings) => ({
    type: LOAD_BOOKINGS,
    bookings
});


const createBooking = (booking) => ({
    type: BOOK_DATE,
    booking
})



export const bookDate = (formData) => async (dispatch) => {

    const response = await csrfFetch('/api/bookings', {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData)
    });


    if(response.ok){
        const newDate = await response.json();
        console.log('New Date:', newDate)
        dispatch(createBooking(newDate));
        return newDate;
    };

};


export const getBookings = () => async (dispatch) => {
    const response = await fetch('/api/bookings');
    if(response.ok){
        const bookings = await response.json();
        dispatch((loadBookings(bookings)))
    }
};



const initialState = {}

const bookingReducer = (state = initialState, action ) => {

    switch(action.type) {
        case LOAD_BOOKINGS: {
            const allBookings = {};
            action.bookings.forEach(booking => {
                allBookings[booking.id] = booking
            })
            return allBookings
        }
        
        case BOOK_DATE: {
            if(!state[action.booking.id]){
                const newState = {
                    ...state,
                    [action.booking.id]: action.booking
                };
                return newState
            }
            else return{
                ...state,
                [action.booking.id]: {
                    ...state[action.booking.id],
                    ...action.booking
                }
            };
        }

        default:
            return state;
    }
}


export default bookingReducer