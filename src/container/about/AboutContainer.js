import HeaderContainer from "../header/headerContainer";
import About from "../../components/about/about";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAboutSaga } from "../../modules/redux/about";
import FooterContainer from "../footer/footerContainer";
const AboutContainer = () => {
  const about = useSelector((state) => state.about);
  const dispatch = useDispatch();

  const initMainSaga = useCallback(() => {
    dispatch(getAboutSaga());
  }, [dispatch]);

  useEffect(() => {
    initMainSaga();
  }, []);
  return (
    <>
      <HeaderContainer />
      <About about={about} />
      <FooterContainer />
    </>
  );
};
export default AboutContainer;
