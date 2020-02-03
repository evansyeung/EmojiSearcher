import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onInputSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
    this.props.onSearchTermSubmit(e.target.value);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={e => e.preventDefault()} className="ui form">
          <div className="field">
            <label>Emoji Search</label>
            <input
              onChange={this.onInputSearchChange}
              type="text"
              value={this.state.searchTerm}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
