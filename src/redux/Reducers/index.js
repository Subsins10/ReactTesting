import { combineReducers } from "redux";
import {fetchPostsReducer} from "./postReducer";

export default combineReducers({
    posts: fetchPostsReducer
})