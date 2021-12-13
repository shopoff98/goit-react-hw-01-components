import "./App.css";
import user from "./components/Profile/user.json";
import data from "./components/Statisctics/data.json";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statisctics/Statistics";
import Section from "./components/Statisctics/SectionStatistics";
import dataFriends from "./components/Friends/friends.json";
import FriendsList from "./components/Friends/FriendsList";
import TransactionHistory from "./components/Transaction/TransactionHistory";
import transaction from "./components/Transaction/transaction-history.json";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section title="Upload stats">
        <Statistics items={data} />
      </Section>
      <FriendsList friends={dataFriends} />
      <TransactionHistory items={transaction} />
    </div>
  );
}

export default App;
