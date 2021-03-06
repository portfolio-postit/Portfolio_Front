import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeContainer from "./container/home/HomeContainer";
import DesktopRouting from "./container/desktop/DesktopRouting";
import AboutContainer from "./container/about/AboutContainer";
import SkillContainer from "./container/skill/SkillContainer";
import ProjectContainer from "./container/project/ProjectContainer";
import NotFoundContainer from "./container/NotFound/NotFoundContainer";
import ModalWrapperContainer from "./container/ModalWrapper/ModalWrapperContainer";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={DesktopRouting} />
        <Route path="/skill" component={SkillContainer} />
        <Route path="/project" component={ProjectContainer} />
        <Route path="/home" component={HomeContainer} />
        <Route paht="/about" component={AboutContainer} />
        <Route component={NotFoundContainer} />
      </Switch>
      <ModalWrapperContainer />
    </>
  );
};

export default Routing;
