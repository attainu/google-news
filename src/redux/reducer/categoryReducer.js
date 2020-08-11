import { SET_CATEGORYWISE_STORIES, TOGGLE_CATEGORY_FETCHING_STATE} from '../actionTypes';
const initialState = {
  stories: [],
  isFetching: false,
};

const categoryPageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CATEGORYWISE_STORIES:
      return {
        ...state,
        stories: payload,
      };
    case TOGGLE_CATEGORY_FETCHING_STATE:
      return {
        ...state,
        isFetching: !state.isFetching,
      };
    default:
      return state;
  }
};

export default categoryPageReducer;
