import { SET_TOP_STORIES, TOGGLE_FETCHING_STATE } from "../actionTypes";
const initialState = {
  stories: [],
  isFetching: false,
};

<<<<<<< HEAD:src/redux/reducer/storiesReducer.js
const storiesReducer = (state = initialState, action) => {
=======
const StoriesReducer = (state = initialState, action) => {
>>>>>>> categoryPage:src/redux/reducer/topStoriesReducer.js
  const { type, payload } = action;

  switch (type) {
    case SET_TOP_STORIES:
      return {
        ...state,
        stories: payload,
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

<<<<<<< HEAD:src/redux/reducer/storiesReducer.js
export default storiesReducer;
=======
export default StoriesReducer;
>>>>>>> categoryPage:src/redux/reducer/topStoriesReducer.js
