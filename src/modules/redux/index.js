import { combineReducers } from "redux";
import main from "./main";
import modal from "./modal";
import about from "./about";
const rootReducer = combineReducers({
  main,
  about,
  modal,
});

export default rootReducer;
