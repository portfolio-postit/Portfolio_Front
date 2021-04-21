import { call, put, takeEvery } from "redux-saga/effects";
import { requestGetApi } from "../../../lib/REQUEST";
import { SKILL } from "../../../lib/API";
import { GET_SKILL, setSkill } from "../../redux/skill/index";

function* getSkillSaga() {
  try {
    const REQUEST_URL = SKILL.GET_TYPE_SKILL("ahn479512@gmail.com", "TOOL");

    const res = yield call(requestGetApi, REQUEST_URL);

    yield put(setSkill(res.data));
  } catch (error) {
    console.log(error);
  }
}

function* SkillSaga() {
  yield takeEvery(GET_SKILL, getSkillSaga);
}

export default SkillSaga;
