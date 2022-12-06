import { useState } from "react";
import "./App.css";
import { TweetContainer } from "./components/TweetContainer";
import { getTweetList } from "./mock/getTweetList";

function App() {
  const [tweetList, setTweetList] = useState(getTweetList());

  const handleAddTweet = () => {
    const tempTweet = [...tweetList];
    tempTweet.push({
      user: {
        avatarUrl:
          "https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-512.png",
        surname: "User",
        name: "Temporary",
        username: "temporaryuser",
      },
      content: {
        imgUrl:
          "https://www.gamesoul.it/wp-content/uploads/2020/01/kobe-bryant-nba-2k17.jpg",
        text: "Learning how to extract components into reusable pieces while gazing at the sunset. What could go wrong?",
        date: "2022-06-12",
        time: "10-41 AM",
      },
    });
    setTweetList(tempTweet);
  };

  const handleDelete = (index) => {
    const tempTweet = [...tweetList];
    tempTweet.splice(index, 1);
    setTweetList(tempTweet);
  };

  return (
    <div className="App">
      <h1 className="title">Today's Tweets</h1>
      <button onClick={handleAddTweet}>Add Tweet</button>
      {tweetList.length > 0 ? (
        <TweetContainer tweetList={tweetList} handleDelete={handleDelete} />
      ) : (
        <h2 style={{ color: "white" }}>No tweets</h2>
      )}
    </div>
  );
}

export default App;
