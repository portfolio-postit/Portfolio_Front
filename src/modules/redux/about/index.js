const SET_ABOUT = "about/SET_ABOUT";

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

const AboutReducer = (state = initialState, action) => {
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

export default AboutReducer;
