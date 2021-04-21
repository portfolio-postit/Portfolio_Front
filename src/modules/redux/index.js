import { combineReducers } from "redux";
import main from "./main";
import modal from "./modal";
import about from "./about";
import project from "./project";
import skill from "./skill";
const rootReducer = combineReducers({
  main,
  about,
  modal,
  project,
  skill,
});

export default rootReducer;
