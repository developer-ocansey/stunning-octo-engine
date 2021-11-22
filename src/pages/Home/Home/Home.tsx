import { FunctionComponent, useEffect } from "react";

import { setPageTitle } from "../../../utils";
import "./style.scss";

const Home: FunctionComponent<any> = () => {
  useEffect(() => {
    setPageTitle("Welcome {username}");
  }, []);
  return <>Home</>;
};

Home.defaultProps = {};

export default Home;
