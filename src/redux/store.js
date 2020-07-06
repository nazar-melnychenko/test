import {combineReducers, createStore} from "redux";
import questionReducer from "./reducers/question-reducer";

const reducers = combineReducers({
	questionPage: questionReducer
});

const store = createStore(reducers);

export default store;

window.state = store;