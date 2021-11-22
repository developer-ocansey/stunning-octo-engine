import React, { FunctionComponent, useEffect, useState } from "react";
import "./style.scss";

const Header: FunctionComponent<any> = () => {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    getTimeOfDay();
  }, []);

  const getTimeOfDay = () => {
    const today = new Date();
    const curHr = today.getHours();

    if (curHr < 12) {
      setTimeOfDay("Good Morning");
    } else if (curHr < 18) {
      setTimeOfDay("Good Afternoon");
    } else {
      setTimeOfDay("Good Evening");
    }
  };
  return <></>;
};

Header.defaultProps = {};

export default Header;
