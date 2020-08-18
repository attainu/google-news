import { SET_TOP_STORIES, TOGGLE_FETCHING_STATE } from "../actionTypes";
const initialState = {
  stories: [],
  isFetching: false,
};

const storiesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TOP_STORIES:
      return {
        ...state,
        stories: payload
      };
    case TOGGLE_FETCHING_STATE:
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    default:
      return state;
  }
};

export default storiesReducer;
