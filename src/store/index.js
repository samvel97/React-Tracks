import { createStore } from "redux";
import allreducer from "./reducers/allreducers";

const store = createStore(allreducer)

export default {store}