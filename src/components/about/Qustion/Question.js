import * as S from "./style";
import React, { useCallback, useState } from "react";
import { QUESTION } from "../../../lib/API";
import { requestPostApiWithBody } from "../../../lib/REQUEST";
const Question = () => {
  const [questionForm, setQuestionForm] = useState({
    email: "",
    content: "",
  });
  const onChangeForm = useCallback(
    (e) => {
      setQuestionForm({
        ...questionForm,
        [e.target.name]: e.target.value,
      });
      console.log(questionForm);
    },
    [questionForm]
  );
  const onClickSubmitBtn = async () => {
    await requestPostApiWithBody(QUESTION.QUESTION(), {
      email: questionForm.email,
      content: questionForm.content,
    }).then((res) => {
      console.log(res.status);
      switch (res.status) {
        case 200: {
          document.getElementById("email").value = "";
          document.getElementById("content").value = "";

          alert("성공");
        }
        case 403: {
          alert("error");
        }
      }
    });
  };

  return (
    <S.Qustion>
      <S.Questiontitle>Question</S.Questiontitle>
      <S.QuestionContent>Username or email address</S.QuestionContent>
      <S.EmailInput
        type="email"
        name="email"
        onChange={onChangeForm}
        id="email"
      />
      <S.QuestionContent>Content</S.QuestionContent>
      <S.ContentInput
        type="content"
        name="content"
        onChange={onChangeForm}
        id="content"
      />
      <S.SendBtn onClick={onClickSubmitBtn}>
        <div>SEND</div>
      </S.SendBtn>
    </S.Qustion>
  );
};

export default Question;
