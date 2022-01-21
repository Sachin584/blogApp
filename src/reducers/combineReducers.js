import {blogList} from "./index";
import {blogDesc} from "./index";
import {blogImage} from "./index";


import { combineReducers } from "redux";

const reducers = combineReducers({
  blogList, blogDesc, blogImage
});

export default reducers;
