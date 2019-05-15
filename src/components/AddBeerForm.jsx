import React from "react";


function AddBeerForm(props) {
  let _name = null;
  let _brewery = null;
  let _type = null;
  let _abv = null;


  function handleAddBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({ name: _name.value, brewery: _brewery.value, type: _type.value, abv: _abv.value, pintsLeft: 124 });
    _name.value = '';
    _brewery.value = '';
    _type.value = '';
    _abv.value = '';
    document.getElementById('success').style.display = 'block'
    setTimeout(function () {
      document.getElementById('success').style.display = 'none';
    }, 1000);
  }




  return (
    <div className="container">
      <style jsx>{`
        #success {
          display: none;
        }

        .formContainer {
          width: 75%;
          background-color: #d3d3d3;
          margin-left: auto;
          margin-right: auto;
          border-radius: 25px;
          height: 230px;
        }
        .container {
          text-align: center;
        }
        input {
          width: 60%;
          margin: 10px;
          height: 20px;
          border-radius: 5px;
        }
      `}</style>
      <div className="formContainer">
        <form onSubmit={handleAddBeerFormSubmission}>
          <input
            type="text"
            required
            id="name"
            placeholder="Beer Name"
            ref={(input) => { _name = input; }} />
          <br />
          <input
            type="text"
            required
            id="brewery"
            placeholder="Brewery"
            ref={(input) => { _brewery = input; }} />
          <br />
          <input
            type="text"
            required
            id="type"
            placeholder="Type"
            ref={(input) => { _type = input; }} />
          <br />
          <input
            type="text"
            required
            id="abv"
            placeholder="Alcohol By Volume (ABV)"
            ref={(input) => { _abv = input; }} />

          <br />
          <button type="submit">Tap Keg!</button>
        </form>

      </div>
      <div id="success">Success!</div>
    </div>
  );
}

export default AddBeerForm;
