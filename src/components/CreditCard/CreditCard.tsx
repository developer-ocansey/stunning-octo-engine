import { FunctionComponent } from "react";

import "./style.scss";

const CreditCard: FunctionComponent<any> = ({ data }) => {
  return (
    <div className="card-credit">
      <div className="card__front card__part">
        <img
          className="card__front-square card__square"
          src="https://storage.googleapis.com/onix-sore/visa-logo.svg"
          alt=""
        />
        <img
          className="card__front-logo card__logo"
          src="https://storage.googleapis.com/onix-sore/kuva-logo.svg"
          alt=""
        />
        <p className="card_numer">{data.number}</p>
        <div className="card__space-75">
          <span className="card__label">Card holder</span>
          <p className="card__info">{data.name}</p>
        </div>
        <div className="card__space-25">
          <span className="card__label">Expires</span>
          <p className="card__info">{data.exp}</p>
          <div className="align-end">
            <div
              className={`badge ${
                data.is_live ? "badge-opacity-success" : "badge-opacity-danger"
              }`}
            >
              {data.is_live ? "Active" : "In active"}
            </div>
          </div>
        </div>
      </div>
      <div className="card__back card__part">
        <div className="card__black-line" />
        <div className="card__back-content">
          <div className="card__secret">
            <p className="card__secret--last">{data.cvv}</p>
          </div>
          <img
            className="card__back-logo card__logo"
            src="https://storage.googleapis.com/onix-sore/access-bank.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

CreditCard.defaultProps = {};

export default CreditCard;
