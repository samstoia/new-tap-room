import React from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <div className="navBar">
        <style jsx>{`
          .icon {
            display: inline-block;
          }
          .navBar {
            padding: 9px 8px 9px 8px;
            display: flex;
            grid-template-columns: 4fr, 3fr;
            //   border-bottom: 1px solid #eeeeee;
            //   width: 100%;
            //   box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.05);
          }
          .block {
            display: inline-block;
          }
          .right {
            display: inline-block;
            position: absolute;
            right: 0px;
          }

          .button {
            border: none;
            background-color: white;
            font-size: 15px;
            color: #646f79;
            font-weight: 400;
            letter-spacing: 0.5px;
            margin-right: 20px;
            display: inline-block;
          }
          button:hover {
            cursor: pointer;
          }

          @media only screen and (max-width: 960px) {
          }

          #leftButton {
            text-decoration: underline;
            color: blue;
          }
        `}</style>
        <div className="block">
          <Link className="icon" to="/">
            <FaBeer />
            <button className="button" id="leftButton">
              Sam's Tap Room
            </button>
          </Link>
        </div>

        <div className="right">
          <button className="button">
            <Link to="/beers">Our Beers</Link>
          </button>
          <button className="button">
            <Link to="/add-beers">Add Beers</Link>
          </button>
          <button className="button">
            <Link to="/about">About Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
