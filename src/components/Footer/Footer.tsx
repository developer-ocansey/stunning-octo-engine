import { FunctionComponent } from "react";

import "./style.scss";

const Header: FunctionComponent<any> = () => {
  return (
    <footer className="footer">
      <div className="d-sm-flex justify-content-center justify-content-sm-between">
        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
          Copyright © 2021. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

Header.defaultProps = {};

export default Header;
