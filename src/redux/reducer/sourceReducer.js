import { SET_SOURCE_STORIES, TOGGLE_SOURCE_FETCHING_STATE } from "../actionTypes";
const initialState = {
  source: [],
  isFetching: false,
};

const sourceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SOURCE_STORIES:
      return {
        ...state,
        source: payload,
      };
    case TOGGLE_SOURCE_FETCHING_STATE:
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    default:
      return state;
  }
};

export default sourceReducer;
