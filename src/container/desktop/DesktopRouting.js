import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

const DesktopRouting = () => {
    const history = useHistory();
    useEffect(() => {
        history.push("/home");
    }, []);


    return (
        <></>
    )
};
export default DesktopRouting;