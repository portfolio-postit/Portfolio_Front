import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "../../components/modalWrapper/ModalWrapper";
import { dropModal } from "../../modules/redux/modal/index";

const ModalWrapperContainer = () => {
  const modalData = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  const ModalOff = useCallback(() => dispatch(dropModal()), [dispatch]);

  return <ModalWrapper modalData={modalData} ModalOff={ModalOff} />;
};

export default ModalWrapperContainer;
