import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { searchTerm: "" };

  onSearchTermSubmit = searchTerm => {
    this.setState({ searchTerm });
  };

  render() {
    return <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />;
  }
}

export default App;
