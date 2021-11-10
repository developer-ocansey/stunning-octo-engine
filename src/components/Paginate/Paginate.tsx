import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Paginate: FunctionComponent<any> = () => {
  return (
    <div className="pagination mt-2">
      <Link to="#">&laquo;</Link>
      <Link to="#">1</Link>
      <Link to="#" className="active">
        2
      </Link>
      <Link to="#">3</Link>
      <Link to="#">4</Link>
      <Link to="#">5</Link>
      <Link to="#">6</Link>
      <Link to="#">&raquo;</Link>
    </div>
  );
};

Paginate.defaultProps = {};

export default Paginate;
