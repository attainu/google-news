import authReducer from "./reducer/authReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore'
import storiesReducer from "./reducer/storiesReducer";
import sourceReducer from "./reducer/sourceReducer";
import searchReducer from "./reducer/searchReducer"
import categoryPageReducer from "./reducer/categoryReducer";
import worldNewsReducer from "./reducer/worldNewsReducer";
import bookmarkReducer from "./reducer/bookmarkReducer";
import followingReducer from "./reducer/followingReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  storiesStatus: storiesReducer,
  bookmark:bookmarkReducer,
  following:followingReducer,
  sourceStatus: sourceReducer,
  categoryPageStatus: categoryPageReducer,
  worldNewsStatus: worldNewsReducer,
  searchStatus: searchReducer,
});

export default rootReducer;
