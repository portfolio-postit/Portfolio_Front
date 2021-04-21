import * as S from "./style";

const skillPostit = (props) => {
  return (
    <>
      <S.SKillPostit>
        <p>Tool</p>
        <img src={props.url} class="size margin1" />
        <img src={props.url} class="margin2" height="40%" width="45%" />
      </S.SKillPostit>
      <S.SKillPostit>
        <p>FrameWork</p>
        <img src={props.url} class="size margin1" />
        <img src={props.url} class="margin2" height="40%" width="45%" />
      </S.SKillPostit>
      <S.SKillPostit>
        <p>Language</p>
        <img src={props.url} class="size margin1" />
        <img src={props.url} class="margin2" height="40%" width="45%" />
      </S.SKillPostit>
      <S.SKillPostit>
        <p>etc</p>
        <img src={props.url} class="size margin1" />
        <img src={props.url} class="margin2" height="40%" width="45%" />
      </S.SKillPostit>
    </>
  );
};

export default skillPostit;
