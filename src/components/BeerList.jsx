import React from "react";
import Beer from "./Beer";
import { Link } from "react-router-dom";

class BeerList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      emptyBeerList: "There Are No Beers Added to the taproom!"
    }

  };

  componentDidMount() {
    if (this.props.beersOnTap.length === 0) {
      document.getElementById("noBeers").style.display = "inline";
    }
  }



  render() {
    return (
      <div>
        <style jsx>
          {`
          h1 {
            text-align: center;
          }
          .beerBlock {
            text-align: center;
          }

          .pageTop h1{
            font-size: 3em;
          }

          #noBeers {
            display: none;
          }
        `}
        </style>
        <div className="pageTop">
          <h1>Our Beers</h1>
        </div>

        <div id="noBeers">
          <p>No Kegs on Tap! Add More <Link to="/add-beers">Here</Link></p>
        </div>


        <div className="beerBlock">
          {this.props.beersOnTap.map((beer, index) => (
            <Beer
              name={beer.name}
              brewery={beer.brewery}
              type={beer.type}
              abv={beer.abv}
              key={index}
              id={index}
              pintsLeft={beer.pintsLeft}
              onSellPintClicked={this.props.onSellPintClicked}
              onSellGrowlerClicked={this.props.onSellGrowlerClicked}
              onDeleteButtonClicked={this.props.onDeleteButtonClicked}
            />
          ))}
        </div>

      </div >

    );
  }
}

export default BeerList;
