import { all } from "redux-saga/effects";
// import authSaga from "./auth";
import mainSaga from "./main";
import aboutSaga from "./about";
import projectSaga from "./project";
import skillSaga from "./skill";
function* rootSaga() {
  yield all([mainSaga(), aboutSaga(), projectSaga(), skillSaga()]);
}

export default rootSaga;
