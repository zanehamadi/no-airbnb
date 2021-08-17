const LOAD_USERS = "users/LOAD_users";


const loadUsers = (users) => ({
    type: LOAD_USERS,
    users
});



export const getUsers = () => async (dispatch) => {
    const response = await fetch('/api/users');
    if(response.ok){
        const users = await response.json();
        dispatch((loadUsers(users)))
    }
};

const initialState = {}

const userReducer = (state = initialState, action ) => {

    switch(action.type) {
        case LOAD_USERS: {
            const allUsers = {};
            action.users.forEach(user => {
                allUsers[user.id] = user
            })
            return allUsers
        }

        default:
            return state;
    }
}


export default userReducer