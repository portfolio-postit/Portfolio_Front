const SET_MAIN = "main/SET_MAIN";

export const GET_MAIN = "main/GET_MAIN";

export const setMain = (payload) => ({
  type: SET_MAIN,
  payload,
});

export const getMainSaga = () => ({
  type: GET_MAIN,
});

const initialState = {
  main: [],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAIN: {
      console.log(action);
      return {
        ...state,
        main: action.payload,
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
