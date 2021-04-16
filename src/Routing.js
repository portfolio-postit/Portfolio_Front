import React from "react";
import { Route, Switch } from "react-router-dom";
// import ModalWrapContainer from "./container/ModalWrap/ModalWrapContainer";
import HomeContainer from "./container/home/HomeContainer";
import DesktopRouting from "./container/desktop/DesktopRouting";
import AboutContainer from "./container/about/AboutContainer";
import SkillContainer from "./container/skill/SkillContainer";
const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={DesktopRouting} />
        <Route path="/home" exact component={HomeContainer} />
        <Route paht="/about" component={AboutContainer} />
        <Route path="/skill" component={SkillContainer} />
        {/* <Route path="/project" component={ProjectContainer} /> */}
      </Switch>
      {/* <ModalWrapContainer /> */}
    </>
  );
};

export default Routing;
