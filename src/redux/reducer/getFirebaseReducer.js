
const initialState = {
    stories: [],
    isFetching: false,
};

const storiesReducer = (state = initialState, action) => {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case "GET_DATA":
            return {
                ...state,
                stories: payload,
            };
        case "TOGGLE_GET_FIREBASE_STATE":
            return {
                ...state,
                isFetching: !state.isFetching,
            };
        default:
            return state;
    }
};

export default storiesReducer;