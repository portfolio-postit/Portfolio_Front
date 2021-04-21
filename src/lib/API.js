export const MAIN = {
  GET_MAIN: (email) => {
    return `/main/${email}`;
  },
};

export const ABOUT = {
  GET_ABOUT: (email) => {
    return `/about/${email}`;
  },
};

export const QUESTION = {
  QUESTION: () => {
    return `/question`;
  },
};

export const PROJECT = {
  GET_PROJECT: (email) => {
    return `/project/all/${email}`;
  },
};

export const SKILL = {
  GET_ALL_SKILL: (email) => {
    return `/skill/${email}`;
  },
  GET_TYPE_SKILL: (email, type) => {
    return `/skill/${email}/${type}`;
  },
};
