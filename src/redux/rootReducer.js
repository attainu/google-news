import authReducer from "./reducer/authReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import topStoriesReducer from "./reducer/topStoriesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  topStoriesStatus: topStoriesReducer,
});

export default rootReducer;
