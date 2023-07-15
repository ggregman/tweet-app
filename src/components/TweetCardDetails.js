import React, { useState } from "react";
import { AiFillDelete, AiOutlineHeart } from "react-icons/ai";

export const TweetCardDetails = ({
  tweet,
  handleDeleteTweet,
  handleAddLikes,
}) => {
  return (
    <div className="tweetDetails">
      <div className="card_header">
        <img
          className="avatar"
          src={tweet.user.avatarUrl}
          alt={tweet.user.username}
        />
        <div className="tweetAuthor">
          <h3 style={{ margin: 0 }}>
            {tweet.user.name} {tweet.user.surname}
          </h3>
          <h4 className="username">@{tweet.user.username}</h4>
        </div>
      </div>
      <p>{tweet.content.text}</p>
      <p style={{ color: "#C0C0C0" }}> {tweet.content.dateTime}</p>
      <div style={{ alignContent: "bottom" }}>
        <div style={{ float: "right" }}>
          <button onClick={handleDeleteTweet}>
            <AiFillDelete style={{ cursor: "pointer" }} />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            position: "relative",
            gap: "0.2rem",
            alignItems: "center",
          }}
        >
          <button onClick={handleAddLikes}>
            <AiOutlineHeart style={{ cursor: "pointer" }} />
          </button>
          <p>
            {tweet.content.liked === true
              ? tweet.content.likes++
              : tweet.content.likes}
          </p>
          <p>{tweet.content.liked ? "liked" : "notLiked" }</p>
        </div>
      </div>
    </div>
  );
};
