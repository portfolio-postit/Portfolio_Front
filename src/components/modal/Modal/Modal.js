import React from "react";
import * as S from "./style";

const Modal = (props) => {
	const { children } = props;

	const PreventModalOff = (e) => {
		e.stopPropagation();
	};

	return <S.Container onClick={(e) => PreventModalOff(e)}>{children}</S.Container>;
};

export default Modal;
