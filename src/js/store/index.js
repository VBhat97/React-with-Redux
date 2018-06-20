import { createStore } from "react";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;