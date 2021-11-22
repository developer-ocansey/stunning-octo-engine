import { FunctionComponent, useEffect } from "react";

import { setPageTitle } from "../../../utils";
import "./style.scss";

const Login: FunctionComponent<any> = () => {
  useEffect(() => {
    setPageTitle("Login");
  }, []);
  return (
    <div>
      <div className={"login-row"}>
        <div className={"login-panel"}>
          <div className="container">
            <h1>Login</h1>
            <p>Login to access you account</p>
            <input
              type="text"
              placeholder="Your Email"
              className={"input-fm"}
            />
            <input
              type="text"
              placeholder="Your Password"
              className={"input-fm"}
            />
            <button type="submit" value="Submit" className={"button"}>
              Login
            </button>
          </div>
        </div>
        <div className={"login-art"}>
          <img src={"./login-back.png"} />
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default Login;
