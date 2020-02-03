import React from "react";
import EmojiItem from "./EmojiItem";

const EmojiList = ({ emojis }) => {
  let renderList = [];

  // node-emoji search() returns a list of emoji objs
  if (Array.isArray(emojis)) {
    renderList = emojis.map(({ key, emoji }) => {
      return <EmojiItem key={key} name={key} emoji={emoji} />;
    });
  }

  // initial setup - node-emoji provides an emoji dict initally
  else if (typeof emojis == "object") {
    for (var key in emojis) {
      if (emojis.hasOwnProperty(key)) {
        renderList.push(<EmojiItem key={key} name={key} emoji={emojis[key]} />);
      }
    }
  }

  return <div>{renderList}</div>;
};

export default EmojiList;
