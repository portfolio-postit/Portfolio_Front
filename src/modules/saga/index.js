import { all } from "redux-saga/effects";
// import authSaga from "./auth";
import mainSaga from "./main";
import aboutSaga from "./about";
function* rootSaga() {
  yield all([mainSaga(), aboutSaga()]);
}

export default rootSaga;
