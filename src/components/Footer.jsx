import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <style jsx>
        {`
          .footer {
            left: 0;
            bottom: 0;
            width: 100%;
            text-align: center;
          }
        `}
      </style>
      <div>
        <p>&#169; 2019 Sam Stoia</p>
      </div>
    </div>
  );
}

export default Footer;
