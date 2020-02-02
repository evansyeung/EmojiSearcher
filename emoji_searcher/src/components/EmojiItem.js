import React from "react";

class EmojiItem extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.emoji}
          {this.props.name}
        </p>
      </div>
    );
  }
}

export default EmojiItem;
