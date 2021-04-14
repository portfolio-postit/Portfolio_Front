import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMainSaga } from "../../../modules/redux/main";
import Body from "../../../components/home/body/body";

const BodyContainer = () => {
  const email = useSelector((state) => state.main.main?.about?.email);
  const name = useSelector((state) => state.main.main?.about?.username);
  const git_url = useSelector((state) => state.main.main?.about?.git_url);
  const phone_number = useSelector(
    (state) => state.main.main?.about?.phone_number
  );
  const tool = useSelector((state) => state.main.main?.tool);
  const [tool1, tool2] = tool || ["", ""];
  const project = useSelector((state) => state.main.main?.project);
  const main = useSelector((state) => state.main);
  const dispatch = useDispatch();

  const initMainSaga = useCallback(() => {
    dispatch(getMainSaga());
  }, [dispatch]);

  useEffect(() => {
    initMainSaga();
  }, []);

  console.log(main);
  return (
    <Body
      phone_number={phone_number}
      git_url={git_url}
      name={name}
      email={email}
      tool1={tool1}
      tool2={tool2}
      project={project}
    />
  );
};

export default BodyContainer;
