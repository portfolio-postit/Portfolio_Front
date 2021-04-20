import { call, put, takeEvery } from "redux-saga/effects";
import { requestGetApi } from "../../../lib/REQUEST";
import { PROJECT } from "../../../lib/API";
import { GET_PROJECT, setProject } from "../../redux/project/index";

function* getProjectSaga() {
  try {
    const REQUEST_URL = PROJECT.GET_PROJECT("ahn479512@gmail.com");

    const res = yield call(requestGetApi, REQUEST_URL);

    yield put(setProject(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* ProjectSaga() {
  yield takeEvery(GET_PROJECT, getProjectSaga);
}

export default ProjectSaga;
