export const SHOW_MODAL = "modal/SHOW_MODAL";
export const DROP_MODAL = "modal/DROP_MODAL";
export const SET_ERROR = "modal/SET_ERROR";

export const GET_ERROR_SAGA = "modal/GET_ERROR_SAGA";

export const showModal = (payload) => ({
  type: SHOW_MODAL,
  payload,
});
export const dropModal = () => ({
  type: DROP_MODAL,
});
export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

const initialState = {
  isShow: false,
  error: {
    state: false,
    text: "",
  },
  modalElement: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      return {
        ...state,
        isShow: true,
        modalElement: action.payload,
      };
    }
    case DROP_MODAL: {
      return {
        ...state,
        isShow: false,
        modalElement: null,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: {
          state: action.payload.state,
          text: action.payload.text,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;
