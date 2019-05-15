import React from "react";
import beerImage from './../assets/images/beer.jpg';
import tapImage from './../assets/images/taproom.jpeg';
import story from "./../assets/images/story.jpeg"

function About() {
  return (
    <div className="page-wrapper">
      <style jsx>
        {`
          .pageTop {
            text-align: center;
          }

          .pageTop h3 {
            font-size: 3em;
          }

          .about-grid {
            height: 80vw;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-gap: 20px;
            grid-template-areas:
              ". b b b b b b b b b b ."
              ". s s s s s s s s s s ."
              ". t t t t t t t t t t .";
          }

          .our-beer {
            grid-area: b;

          }
          .our-story {
            grid-area: s;

          }
          .our-taproom {
            grid-area: t;
          }

          .imgBlock {
            float: left;
            display: inline-block;
            height: 100%;
            width: 60%;
            
          }

          .imgBlockRight {
            float: right;
            display: inline-block;
            height: 100%;
            width: 60%;
            
          }

          .imgBlock img {
            width: 100%;
            max-height:
          }

          .imgBlockRight img {
            width: 100%;
            max-height:
          }

          .textBlock{
            display: inline-block;
            height: 100%;
            width: 40%;
          }

          .textBlockRight{
            display: inline-block;
            height: 100%;
            width: 40%;
          }

          .imgBlock h1{
            position: absolute;
            color: white;
            font-size: 4vw;
          }

          .imgBlockRight h1{
            float: right;
            position: absolute;
            color: white;
            font-size: 4vw;
          }

          .textBlock p{
            padding-left: 10px;
            font-size: 2vw;
          }

          .textBlockRight p{
            padding-right: 10px;
            font-size: 2vw;
          }
          
        }
      `}
      </style>
      <div className="pageTop">
        <h3>About Us</h3>
      </div>

      <div className="about-grid">
        <div className="our-beer">

          <div className="textBlock">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, similique hic? Quasi dolor ad earum repellat, alias ducimus voluptatum a nam odio, quis cum. Dicta libero quaerat aliquam. Porro, voluptate obcaecati. Veniam quia alias animi nihil accusantium veritatis in nesciunt?
            </p>
          </div>
          <div className="imgBlock">
            <h1>The Beer</h1>
            <img src={beerImage} alt="" />
          </div>


        </div>
        <div className="our-story">
          <div className="imgBlockRight">
            <h1>The Story</h1>
            <img src={story} alt="" />
          </div>

          <div className="textBlockRight">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, similique hic? Quasi dolor ad earum repellat, alias ducimus voluptatum a nam odio, quis cum. Dicta libero quaerat aliquam. Porro, voluptate obcaecati. Veniam quia alias animi nihil accusantium veritatis in nesciunt?
            </p>
          </div>
        </div>
        <div className="our-taproom">
          <div className="imgBlock">
            <h1>The Taproom</h1>
            <img src={tapImage} alt="" />
          </div>

          <div className="textBlock">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, similique hic? Quasi dolor ad earum repellat, alias ducimus voluptatum a nam odio, quis cum. Dicta libero quaerat aliquam. Porro, voluptate obcaecati. Veniam quia alias animi nihil accusantium veritatis in nesciunt?
            </p>
          </div>

        </div>
      </div>

    </div>

  );
}

export default About;
