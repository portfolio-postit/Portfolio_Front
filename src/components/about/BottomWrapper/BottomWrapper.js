import * as S from "./style";
const BottomWrapper = (props) => {
  console.log(props);

  return (
    <S.BottomWrapper>
      <S.Image src={process.env.REACT_APP_S3_URL + props.about.file_name} />
      <S.Content>
        <div>{props.about.username} (Ahnyeongjun)</div>
        <div>이메일 {props.about.email} </div>
        <div>깃허브 {props.about.git_url} </div>
        <div>전화번호 {props.about.phone_number} </div>
        <div>학력 대덕소프트웨어마이스터고등학교</div>
      </S.Content>
    </S.BottomWrapper>
  );
};

export default BottomWrapper;
