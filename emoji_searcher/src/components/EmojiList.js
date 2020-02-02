import React from "react";
import EmojiItem from "./EmojiItem";

const EmojiList = ({ emojiDict }) => {
  const renderList = [];

  for (var key in emojiDict) {
    if (emojiDict.hasOwnProperty(key)) {
      renderList.push(
        <EmojiItem key={key} name={key} emoji={emojiDict[key]} />
      );
    }
  }

  return <div>{renderList}</div>;
};

export default EmojiList;
