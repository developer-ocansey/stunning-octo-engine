import { FunctionComponent, useEffect } from "react";

import { setPageTitle } from "../../../utils";
import "./style.scss";

const Register: FunctionComponent<any> = () => {
    useEffect(() => {
        setPageTitle("Create an Account");
    }, []);
    return (
        <>

        </>
    );
};

Register.defaultProps = {};

export default Register;