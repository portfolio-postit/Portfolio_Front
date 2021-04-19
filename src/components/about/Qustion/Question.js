import * as S from "./style";
const Question = () => {
  return (
    <S.Qustion>
      <S.Questiontitle>Question</S.Questiontitle>
      <S.QuestionContent>Username or email address</S.QuestionContent>
      <S.EmailInput />
      <S.QuestionContent>Content</S.QuestionContent>
      <S.ContentInput />
      <S.SendBtn>
        <div>SEND</div>
      </S.SendBtn>
    </S.Qustion>
  );
};

export default Question;
