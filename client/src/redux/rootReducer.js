import { combineReducers } from "redux";
import educationReducer from "./education/educationReducer";
import experienceReducer from "./experience/experienceReducer";
import blogReducer from "./blog/blogReducer"
const rootReducer = combineReducers({
  education: educationReducer,
  experience: experienceReducer,
  blog: blogReducer
});
export default rootReducer;
