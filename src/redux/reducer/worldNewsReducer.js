import { SET_WORLD_STORIES, TOGGLE_WORLD_STORIES_STATE  } from "../actionTypes";
const initialState = {
  stories: [],
  isFetching: false,
};

const worldNewsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_WORLD_STORIES:
      return {
        ...state,
        stories: payload,
      };
    case TOGGLE_WORLD_STORIES_STATE :
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    default:
      return state;
  }
};

export default worldNewsReducer;
