import { SET_SEARCH_STORIES, TOGGLE_SEARCH_FETCHING_STATE } from "../actionTypes";
const initialState = {
  stories: [],
  isFetching: false,
};

const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH_STORIES:
      return {
        ...state,
        stories: payload,
      };
    case TOGGLE_SEARCH_FETCHING_STATE:
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    default:
      return state;
  }
};

export default searchReducer;
