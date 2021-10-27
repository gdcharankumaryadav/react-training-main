import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonsDisplay";
import Spinner from './Spinner';

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  rendercontent(){
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner  message="Please click allow to continue..."/>;
  }
  // React says we have to define render!!
  render() {
    return (
      <div className="">
          {this.rendercontent()}
      </div>
    );

  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
