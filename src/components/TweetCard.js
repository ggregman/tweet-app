import React from "react";
import { TweetCardDetails } from "./TweetCardDetails";

export const TweetCard = ({ tweet, handleDeleteTweet, handleAddLikes }) => {
  return (
    <div className="tweetCard">
      <img width="100%" src={tweet.content.imgUrl} alt={tweet.user.username} />
      <TweetCardDetails tweet={tweet} handleDeleteTweet={handleDeleteTweet} handleAddLikes={handleAddLikes} />
    </div>
  );
};
