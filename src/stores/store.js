import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { CLEAR_STATE } from "../actions/actionTypes";
import registerReducer from "../reducers/registerReducer";
import confirmReducer from "../reducers/confirmReducer";

// combine reducers
const appReducer = combineReducers({
  register: registerReducer,
  confirmation: confirmReducer,
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_STATE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
