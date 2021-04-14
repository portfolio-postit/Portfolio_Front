import * as S from "./style";

const skillPostit = (props) => {
  return (
    <>
      <S.SKillPostit>
        <p class="margin40">Tool</p>
        <img src={props.url} class="size margin1" />
        <img src={props.url} class="margin2" height="40%" width="45%" />
      </S.SKillPostit>
      <S.SKillPostit>
        <p class="framework">FrameWork</p>
        <img src={props.url} class="size margin1" />
        <img src={props.url} class="margin2" height="40%" width="45%" />
      </S.SKillPostit>
      <S.SKillPostit>
        <p class="margin10">mostLanguage</p>
        <img src={props.url} class="size margin1" />
        <img src={props.url} class="margin2" height="40%" width="45%" />
      </S.SKillPostit>
      <S.SKillPostit>
        <p>subLanguage</p>
        <img src={props.url} class="size margin1" />
        <img src={props.url} class="margin2" height="40%" width="45%" />
      </S.SKillPostit>
    </>
  );
};

export default skillPostit;
