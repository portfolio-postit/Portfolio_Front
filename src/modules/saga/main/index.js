import { call, put, takeEvery } from "redux-saga/effects";
import { requestGetApi } from "../../../lib/REQUEST";
import { MAIN } from "../../../lib/API";
import { GET_MAIN, setMain } from "../../redux/main/index";

function* getMainSaga() {
  try {
    const REQUEST_URL = MAIN.GET_MAIN("ahn479512@gmail.com");

    const res = yield call(requestGetApi, REQUEST_URL);

    yield put(setMain(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* MainSaga() {
  yield takeEvery(GET_MAIN, getMainSaga);
}

export default MainSaga;
