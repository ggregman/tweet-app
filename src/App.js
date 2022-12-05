import "./App.css";
import { TweetContainer } from "./components/TweetContainer";
import { getTweetList } from "./mock/getTweetList";

function App() {
  const tweetList = getTweetList();

  return (
    <div className="App">
      <TweetContainer tweetList={tweetList} />
    </div>
  );
}

export default App;
