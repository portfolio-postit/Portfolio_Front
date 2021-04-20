import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectSaga } from "../../modules/redux/project";
import HeaderContainer from "../header/headerContainer";
import Project from "../../components/project/Project";
const ProjectContainer = () => {
  const project = useSelector((state) => state.project.project);
  const dispatch = useDispatch();

  const initMainSaga = useCallback(() => {
    dispatch(getProjectSaga());
  }, [dispatch]);

  useEffect(() => {
    initMainSaga();
  }, []);
  return (
    <>
      <HeaderContainer />
      <Project project={project} />
    </>
  );
};
export default ProjectContainer;
