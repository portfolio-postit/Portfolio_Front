import axios from "axios";

const BASE_URL = "http://localhost:5000";

const ACCESS_TOKEN_NAME = "access-token";
const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";
const REFRESH_TOKEN_NAME = "refresh-token";

export const requestGetApi = async (url) => {
  try {
    const res = await axios.get(BASE_URL + url);

    return res;
  } catch (err) {
    if (!err.response) {
      alert("네트워크 상태를 확인해 주세요");
      throw null;
    }
    throw err.response.status;
  }
};

export const requestPostApiWithBody = async (url, body) => {
  try {
    console.log(url);
    const res = await axios.post(BASE_URL + url, body);
    return res;
  } catch (err) {
    if (!err.response) {
      alert("네트워크 상태를 확인해 주세요");
      throw null;
    }
    throw err.response.status;
  }
};
