import { all } from "redux-saga/effects";
// import authSaga from "./auth";
import mainSaga from "./main";

function* rootSaga() {
  yield all([mainSaga()]);
}

export default rootSaga;
