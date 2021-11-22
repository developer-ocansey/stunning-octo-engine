import { FunctionComponent, useEffect } from "react";

import { setPageTitle } from "../../../utils";
import "./style.scss";

const Read: FunctionComponent<any> = () => {
    useEffect(() => {
        setPageTitle("Read Book title");
    }, []);
    return (
        <>
        Read
        </>
    );
};

Read.defaultProps = {};

export default Read;
