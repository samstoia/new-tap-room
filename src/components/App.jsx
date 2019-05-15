import React from "react";
import Homepage from "./Homepage.jsx";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BeerList from "./BeerList.jsx";
import AddBeerControl from "./AddBeerControl";
import About from "./About";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: [],
    }
    this.handleNewBeerCreation = this.handleNewBeerCreation.bind(this);
    this.handleSellPintClicked = this.handleSellPintClicked.bind(this);
    this.handleSellGrowlerClicked = this.handleSellGrowlerClicked.bind(this);
    this.handleDeleteButtonClicked = this.handleDeleteButtonClicked.bind(this);
  };

  handleNewBeerCreation(newBeer) {
    var newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newBeer);
    this.setState({ masterBeerList: newMasterBeerList });

  }

  handleSellPintClicked(newStateObject) {
    let newBeerList = this.state.masterBeerList.slice();
    newBeerList.splice(newStateObject.id, 1, newStateObject);
    let beerIndex = this.getBeerIndex(newStateObject, newBeerList);
    if (newStateObject.pintsLeft <= 0) {
      newBeerList.splice(beerIndex, 1);
      alert(newStateObject.name + " Has Sold Out!")
    }

    this.setState({ masterBeerList: newBeerList })
  }

  handleSellGrowlerClicked(newStateObject) {
    let newBeerList = this.state.masterBeerList.slice();
    newBeerList.splice(newStateObject.id, 1, newStateObject)
    let beerIndex = this.getBeerIndex(newStateObject, newBeerList);
    if (newStateObject.pintsLeft <= 0) {
      newBeerList.splice(beerIndex, 1);
      alert(newStateObject.name + " Has Sold Out!")
    }
    this.setState({ masterBeerList: newBeerList })
  }

  handleDeleteButtonClicked(newStateObject) {
    let newBeerList = this.state.masterBeerList.slice();
    let beerIndex = this.getBeerIndex(newStateObject, newBeerList);
    newBeerList.splice(beerIndex, 1);
    this.setState({ masterBeerList: newBeerList })
  }

  getBeerIndex(beer, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == beer.id) {
        return i;
      }
    }
  }



  render() {
    return (
      <div className="app">
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
        <style >{`
          .app {
            font-family: "Roboto", sans-serif;
          }
        `}

        </style>
        <Navbar />
        <Switch>
          <Route exact path="/" render={Homepage} />
          <Route exact path="/beers" render={() => <BeerList beersOnTap={this.state.masterBeerList} pintsLeft={this.state.pints} onSellPintClicked={this.handleSellPintClicked} onSellGrowlerClicked={this.handleSellGrowlerClicked} onDeleteButtonClicked={this.handleDeleteButtonClicked} />} />
          <Route exact path="/add-beers" render={() => <AddBeerControl onNewBeerCreation={this.handleNewBeerCreation} />} />
          <Route exact path="/about" render={About} />
          <Route component={Error404} />
        </Switch>
        {/* <Footer /> */}
      </div >
    );
  }
}

export default App;
