import React from "react";
import nodeEmoji from "node-emoji";
import SearchBar from "./SearchBar";
import EmojiList from "./EmojiList";

class App extends React.Component {
  state = { searchTerm: "", emojis: nodeEmoji.emoji };

  onSearchTermSubmit = searchTerm => {
    this.setState({
      searchTerm: searchTerm,
      emojis: nodeEmoji.search(searchTerm)
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <EmojiList emojis={this.state.emojis} />
      </div>
    );
  }
}

export default App;
