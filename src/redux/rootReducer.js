import authReducer from "./reducer/authReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import storiesReducer from "./reducer/storiesReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  storiesStatus: storiesReducer,
});

export default rootReducer;
