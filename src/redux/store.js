import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import rrfConfig from '../Config/firebase.config'


import rootReducer from "./rootReducer";

const initialState = {};

const middleware =[
  thunk.withExtraArgument({ getFirebase ,getFirestore})
]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware),
    reduxFirestore(rrfConfig),
    )
);

export default store;