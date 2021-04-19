const SET_ABOUT = "main/SET_ABOUT";

export const GET_ABOUT = "about/GET_ABOUT";

export const setAbout = (payload) => ({
  type: SET_ABOUT,
  payload,
});

export const getAboutSaga = () => ({
  type: GET_ABOUT,
});

const initialState = {
  about: [],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ABOUT: {
      return {
        ...state,
        about: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default MainReducer;
