const SET_PROJECT = "project/SET_PROJECT";

export const GET_PROJECT = "project/GET_PROJECT";

export const setProject = (payload) => ({
  type: SET_PROJECT,
  payload,
});

export const getProjectSaga = () => ({
  type: GET_PROJECT,
});

const initialState = {
  project: [],
};

const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT: {
      return {
        ...state,
        project: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default ProjectReducer;
