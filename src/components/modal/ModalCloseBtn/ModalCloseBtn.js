import React, { useCallback } from "react";
import * as S from "./style/styles";
import { useDispatch } from "react-redux";
import { dropModal } from "../../../modules/redux/modal";

const ModalCloseBtn = () => {
  const dispatch = useDispatch();
  const ModalOff = useCallback(() => dispatch(dropModal()), [dispatch]);

  const { default: img } = require("../../../asset/modal/modalCloseBtn.svg");

  return <S.Container onClick={ModalOff} img={img} />;
};

export default ModalCloseBtn;
