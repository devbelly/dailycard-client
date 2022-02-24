import { combineReducers, createStore } from "redux";
import snackbar from "./ducks/snackbar";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["auth"],
// };

const reducer = combineReducers({
  snackbar,
});

// const persistedReducer = persistReducer(persistConfig, reducer);

// export default persistedReducer;

const store = createStore(reducer, {});

export default store;
