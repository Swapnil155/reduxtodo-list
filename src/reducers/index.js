import {combineReducers} from "redux";
import todoReducers from "./todosReducers";

const rootReducers = combineReducers({
    todoReducers: todoReducers
})

export default rootReducers