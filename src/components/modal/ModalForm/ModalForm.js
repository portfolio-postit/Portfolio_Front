import React from "react";
import * as S from "./style";

const ModalForm = (props) => {
  const { children } = props;

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return <S.Container onSubmit={(e) => onSubmit(e)}>{children}</S.Container>;
};

export default ModalForm;
