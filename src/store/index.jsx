import { createStore } from "redux";
import { tickets } from "./reducers";

const store = createStore(tickets);

export default store;
