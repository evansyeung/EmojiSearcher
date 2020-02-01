import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchTermSubmit(this.state.searchTerm);
  };

  onInputSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
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
