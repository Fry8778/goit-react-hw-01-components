import Profile from '../components/profile/profile';
import Statistics from './statistics/statistics';
import FriendList from './friendsList/friendsList';
import TransactionHistory from "./transactionHistory/transactionHistory";
import data from '../data/statistics.json';
import user from '../data/profile.json';
import friends from '../data/friends.json'
import transactions from '../data/transaction.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
    </div>


  );
};
