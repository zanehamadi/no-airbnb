const LOAD_BOOKINGS = "bookings/LOAD_BOOKINGS";


const loadBookings = (bookings) => ({
    type: LOAD_BOOKINGS,
    bookings
});



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

        default:
            return state;
    }
}


export default bookingReducer