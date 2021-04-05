import React from "react";
import { Route, Switch } from "react-router-dom";
// import ModalWrapContainer from "./container/ModalWrap/ModalWrapContainer";
import HomeContainer from './container/home/HomeContainer';
import DesktopRouting from './container/desktop/DesktopRouting';
import AboutContainer from './container/about/AboutContainer.js';
const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/home" exact component={HomeContainer} />
        <Route paht="/about" component={AboutContainer} />
        {/* <Route path="/skill" component={SkillContainer} /> */}
        {/* <Route path="/project" component={ProjectContainer} /> */}
        <Route path="/" exact component={DesktopRouting} />
      </Switch>
      {/* <ModalWrapContainer /> */}
    </>
  );
};

export default Routing;
