const LOAD_SOLAR_SYSTEMS = "solarSystems/SOLAR_SYSTEMS";


const loadSolarSystems = (solarSystems) => ({
    type: LOAD_SOLAR_SYSTEMS,
    solarSystems
});



export const getSolarSystems = () => async (dispatch) => {
    const response = await fetch('/api/solarSystems');
    if(response.ok){
        const solarSystems = await response.json();
        dispatch((loadSolarSystems(solarSystems)))
    }
};

const initialState = {}

const solarSystemReducer = (state = initialState, action ) => {

    switch(action.type) {
        case LOAD_SOLAR_SYSTEMS: {
            const allSolarSystems = {};
            action.solarSystems.forEach(solarSystem => {
                allSolarSystems[solarSystem.id] = solarSystem
            })
            return allSolarSystems
        }

        default:
            return state;
    }
}


export default solarSystemReducer