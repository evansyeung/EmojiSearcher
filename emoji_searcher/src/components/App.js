import React from "react";
import nodeEmoji from "node-emoji";
import SearchBar from "./SearchBar";
import EmojiList from "./EmojiList";

class App extends React.Component {
  state = { searchTerm: "", emojiDict: nodeEmoji.emoji };

  onSearchTermSubmit = searchTerm => {
    this.setState({ searchTerm });
  };

  render() {
    return (
      <div>
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <EmojiList emojiDict={this.state.emojiDict} />
      </div>
    );
  }
}

export default App;
