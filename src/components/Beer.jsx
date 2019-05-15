import React from "react";

function Beer(props) {


  function sellPintClicked() {
    let newBeer = {
      name: props.name,
      brewery: props.brewery,
      type: props.type,
      abv: props.abv,
      pintsLeft: props.pintsLeft - 1,
      id: props.id
    }
    props.onSellPintClicked(newBeer);
  }

  function sellGrowlerClicked() {
    let newBeer = {
      name: props.name,
      brewery: props.brewery,
      type: props.type,
      abv: props.abv,
      pintsLeft: props.pintsLeft - 3,
      id: props.id
    }
    props.onSellGrowlerClicked(newBeer);
  }

  function deleteButtonClicked() {
    let newBeer = {
      name: props.name,
      brewery: props.brewery,
      type: props.type,
      abv: props.abv,
      pintsLeft: props.pintsLeft,
      id: props.id
    }
    props.onDeleteButtonClicked(newBeer);
  }


  return (
    <div className="grid-container">
      <style jsx>
        {`
          .beerContainer {
            vertical-align: text-top;
            width: 300px;
            text-align: center;
            display: inline-block;
            margin: 15px;
          }
          .grid-container {
            display: inline-block;
          }
        `}
      </style>
      <div className="beerContainer" id="beer">
        <h2>{props.name}</h2>
        <h5>Brewery: {props.brewery}</h5>
        <h5>Type: {props.type}</h5>
        <h5>ABV: {props.abv}</h5>
        <h5>Pints Remaining: {props.pintsLeft}</h5>
        <button onClick={() => sellPintClicked()}>Sell Pint</button>
        <button onClick={() => sellGrowlerClicked()}>Sell Growler</button>
        <button onClick={() => deleteButtonClicked()}>Delete Beer</button>
      </div>
    </div>
  );
}

export default Beer;
