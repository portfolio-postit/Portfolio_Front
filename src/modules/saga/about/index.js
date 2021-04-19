import { ABOUT } from "../../../lib/API";
import { GET_ABOUT, setAbout } from "../../redux/about/index";
import { call, put, takeEvery } from "redux-saga/effects";
import { requestGetApi } from "../../../lib/REQUEST";

function* getAboutSaga() {
  try {
    const REQUEST_URL = ABOUT.GET_ABOUT("ahn479512@gmail.com");

    const res = yield call(requestGetApi, REQUEST_URL);

    yield put(setAbout(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* AboutSaga() {
  yield takeEvery(GET_ABOUT, getAboutSaga);
}

export default AboutSaga;
