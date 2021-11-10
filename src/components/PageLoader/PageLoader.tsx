import React, { FunctionComponent } from "react";
import { BarLoader } from "react-spinners";

import "./style.scss";

const PageLoader: FunctionComponent<any> = () => {
  return (
    <div className="full-page">
      <BarLoader color={"#36454F"} loading={true} height={4} width={100} />
    </div>
  );
};

PageLoader.defaultProps = {};

export default PageLoader;
