import authReducer from "./reducer/authReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import topStoriesReducer from "./reducer/topStoriesReducer";
import categoryPageReducer from "./reducer/categoryReducer";
import worldNewsReducer from "./reducer/worldNewsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  topStoriesStatus: topStoriesReducer,
  categoryPageStatus: categoryPageReducer,
  worldNewsStatus: worldNewsReducer,
});

export default rootReducer;
