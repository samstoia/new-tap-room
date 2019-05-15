import React from "react";
import AddBeerForm from "./AddBeerForm";

function AddBeerControl(props) {

  return (
    <div className="pageTop">
      <style jsx>
        {`
          .pageTop {
            text-align: center;
          }

          .pageTop h3 {
            font-size: 2em;
          }

        `}
      </style>
      <h3>Add Kegs to the Tap List</h3>
      <AddBeerForm onNewBeerCreation={props.onNewBeerCreation} />
    </div>
  );
}


export default AddBeerControl;
