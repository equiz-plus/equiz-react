import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";

// combine reducers
const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  // if (action.type === CLEAR_STATE) {
  //   return appReducer(undefined, action);
  // }

  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
