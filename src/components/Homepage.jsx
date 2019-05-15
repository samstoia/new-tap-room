import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  let noUnderline = {
    textDecoration: "none"
  };
  return (
    <div className="pageWrapper">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
      <style jsx>
        {`
          .pageWrapper {
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
              ),
              url("https://images.unsplash.com/photo-1482443383061-99e85d885be0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
            height: 100%;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            position: relative;
          }

          .container {
            height: 100%;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: .5fr 1fr 1fr .5fr;
            grid-gap: 3px;
            grid-template-areas:
              ". . w w w w w w w w . ."
              ". . . . b b a a . . . ."
              ". . . . b b n n . . . ."
              ". . . . . . . . . . . .";
            text-align: center;
            color: white;
            font-family: "Roboto", sans-serif;
            font-size: 1em;
          }

          .welcome {
            grid-area: w;
            font-size: 140%;
          }

          .welcome h2 {
            font-size: 2em;
          }

          .beers {
            border: 1px solid white;
            grid-area: b;
            font-size: 140%;
            padding: 80% 0;
          }

          .beers h3,
          .about h3,
          .add h3 {
            color: white;
            font-size: 2em;
          }

          .about {
            border: 1px solid white;
            grid-area: a;
            padding: 50% 0;
          }

          .add {
            border: 1px solid white;
            grid-area: n;
            padding: 50% 0;
          }

          .add:hover {
            background-color: #ffff99;
            color: black;
          }

          .beers:hover {
            background-color: #ffff99;
            color: black;
          }

          .about:hover {
            background-color: #ffff99;
            color: black;
          }

          .beers h3:hover,
          .about h3:hover,
          .add h3:hover {
            color: blue;
          }

          @media only screen and (max-width: 750px) {
            .beers h3,
            .about h3,
            .add h3 {
              font-size: 1em;
            }
          }

          
        `}
      </style>
      <div className="container">
        <div className="welcome">
          <h2>Welcome To Sam's Tap Room</h2>
        </div>
        <div className="beers">
          <Link style={noUnderline} to="/beers">
            <h3>
              Our
              <br />
              Beers
            </h3>
          </Link>
        </div>
        <div className="about">
          <Link style={noUnderline} to="/about">
            <h3>About Us</h3>
          </Link>
        </div>
        <div className="add">
          <Link style={noUnderline} to="/add-beers">
            <h3>Add Beers</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
