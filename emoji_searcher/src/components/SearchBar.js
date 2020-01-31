import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Emoji Search</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
