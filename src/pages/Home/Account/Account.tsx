import { FunctionComponent, useEffect } from "react";

import { setPageTitle } from "../../../utils";
import "./style.scss";

const Account: FunctionComponent<any> = () => {
    useEffect(() => {
        setPageTitle("Account Information");
    }, []);
    return (
        <>
            Home
        </>
    );
};

Account.defaultProps = {};

export default Account;