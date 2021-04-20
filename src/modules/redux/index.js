import { combineReducers } from "redux";
import main from "./main";
import modal from "./modal";
import about from "./about";
import project from "./project";
const rootReducer = combineReducers({
  main,
  about,
  modal,
  project,
});

export default rootReducer;
