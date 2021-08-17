const LOAD_PLANETS = "planets/LOAD_PLANETS";


const loadPlanets = (planets) => ({
    type: LOAD_PLANETS,
    planets
});



export const getPlanets = () => async (dispatch) => {
    const response = await fetch('/api/planets');
    if(response.ok){
        const planets = await response.json();
        dispatch((loadPlanets(planets)))
    }
};

const initialState = {}

const planetReducer = (state = initialState, action ) => {

    switch(action.type) {
        case LOAD_PLANETS: {
            const allPlanets = {};
            action.planets.forEach(planet => {
                allPlanets[planet.id] = planet
            })
            return allPlanets
        }

        default:
            return state;
    }
}


export default planetReducer