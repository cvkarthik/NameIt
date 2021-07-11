import React from "react";
import Header from "./Header.js";
import Searchbox from "./Searchbox.js";
import ResultContainer from "./ResultContainer.js";
import "./style.css";

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
  state = {
    name: "Name It!",
    headerExpanded: true,
    suggestedNames: []
  };
  handleInputChange = (inputText) => {
    this.setState({ headerExpanded: inputText.length > 0 ? false : true, suggestedNames: inputText.length > 0 ? name(inputText) : [] })
  }
  render() {
    return (
      <div>
        <Header headerExpanded={this.state.headerExpanded} headText={this.state.name} />
        <Searchbox handleInputChange={this.handleInputChange} />
        <ResultContainer suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;
