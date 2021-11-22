import { FunctionComponent, useEffect } from "react";

import { setPageTitle } from "../../utils";
import "./style.scss";

const Index: FunctionComponent<any> = () => {
  useEffect(() => {
    setPageTitle("Unlimited access to academic books");
  }, []);
  return <></>;
};

Index.defaultProps = {};

export default Index;
