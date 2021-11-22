import { FunctionComponent, useEffect } from "react";

import { setPageTitle } from "../../../utils";
import "./style.scss";

const Books: FunctionComponent<any> = () => {
    useEffect(() => {
        setPageTitle("All Books");
    }, []);
    return (
        <>
            Home
        </>
    );
};

Books.defaultProps = {};

export default Books;