import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

class EmojiItem extends React.Component {
  state = {
    emoji: this.props.emoji,
    name: this.props.name,
    copied: false
  };

  render() {
    return (
      <div style={{ cursor: "pointer" }}>
        <CopyToClipboard
          text={this.state.emoji}
          onCopy={() => this.setState({ copied: true })}
        >
          <p>
            {this.state.emoji} {this.props.name}
          </p>
        </CopyToClipboard>
      </div>
    );
  }
}

export default EmojiItem;
