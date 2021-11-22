import { FunctionComponent, useEffect } from "react";

import { setPageTitle } from "../../../utils";
import "./style.scss";

const ResetPassword: FunctionComponent<any> = () => {
    useEffect(() => {
        setPageTitle("Reset Account");
    }, []);
    return (
        <>

        </>
    );
};

ResetPassword.defaultProps = {};

export default ResetPassword;