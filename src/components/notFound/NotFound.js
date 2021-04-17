import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

const NotFound = () => {
  return (
    <S.Container>
      <S.ErrorWrap>
        <S.TopText>error</S.TopText>
        <S.MainText>404</S.MainText>
        <S.BorderText>Page Not Found</S.BorderText>
        <S.SubText>
          This page you're looking for doesn't exist or an other error occured.
        </S.SubText>
      </S.ErrorWrap>
      <S.RedirectBtn to="/home" as={Link}>
        Go Home
      </S.RedirectBtn>
    </S.Container>
  );
};

export default NotFound;
