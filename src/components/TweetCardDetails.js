import React from "react";

export const TweetCardDetails = ({ tweet }) => {
  return (
    <div className="tweetDetails">
      <div className="card_header">
        <img className="avatar" src={tweet.user.avatarUrl} alt={tweet.user.username} />
        <div className="tweetAuthor">
          <h3 style={{ margin: 0 }}>
            {tweet.user.name} {tweet.user.surname}
          </h3>
          <h4 className="username">@{tweet.user.username}</h4>
        </div>
      </div>
      <p>{tweet.content.text}</p>
      <p className="dateTime">
        {tweet.content.tweetTime} - {tweet.content.tweetDate}
      </p>
    </div>
  );
};
