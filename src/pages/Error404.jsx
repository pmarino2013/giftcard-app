import React from "react";
import error404 from "../img/error.gif";

const Error404 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <img src={error404} alt="Error 404" />
        </div>
      </div>
    </div>
  );
};

export default Error404;
