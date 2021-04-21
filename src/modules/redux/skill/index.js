const SET_SKILL = "skill/SET_SKILL";
const UPDATE_SKIll = "skill/UPDATE_SKILL";
export const GET_SKILL = "skill/GET_SKILL";

export const setSkill = (payload) => ({
  type: SET_SKILL,
  payload,
});

export const updateSkill = (payload, skillType) => ({
  type: UPDATE_SKIll,
  payload,
  skillType,
});

export const getSkillSaga = () => ({
  type: GET_SKILL,
});

const initialState = {
  skill: [],
  type: "",
};

const SkillReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SKILL: {
      return {
        ...state,
        skill: action.payload,
        type: "MOSTLANGUAGE",
      };
    }
    case UPDATE_SKIll: {
      return {
        ...state,
        skill: action.payload,
        type: action.skillType,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default SkillReducer;
