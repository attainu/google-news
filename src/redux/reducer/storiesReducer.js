const initialState = {
  stories: [],
  isFetching: false,
};

const storiesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_STORIES":
      return {
        ...state,
        stories: payload,
      };
    case "TOOGLE_FETCHING_STATE":
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    default: return state
  }
};

export default storiesReducer;
