import authReducer from "./reducer/authReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import storiesReducer from "./reducer/storiesReducer";
import sourceReducer from "./reducer/sourceReducer";
import categoryPageReducer from "./reducer/categoryReducer";
import worldNewsReducer from "./reducer/worldNewsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  storiesStatus: storiesReducer,
  sourceStatus: sourceReducer,
  categoryPageStatus: categoryPageReducer,
  worldNewsStatus: worldNewsReducer,
});

export default rootReducer;
