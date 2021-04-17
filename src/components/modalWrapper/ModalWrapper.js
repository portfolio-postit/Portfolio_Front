import React from "react";
import * as S from "./style";

const ModalWrapper = (props) => {
  const { modalData } = props;
  const { ModalOff } = props;

  const { isShow, modalElement } = modalData;
  const Modal = modalElement;

  return (
    <>
      {isShow && (
        <S.Container onClick={ModalOff}>{Modal && <Modal />}</S.Container>
      )}
    </>
  );
};

export default ModalWrapper;
