import Profile  from '../components/profile/profile';
import Statistics from '../components/statistics/statisticsTitle';
import FriendList from '../components/friend/friendList';
import TransactionHistory from "../components/transaction/transactionHistory";
import user from '../data/profile.json';
import data from '../data/statisticsTitle.json';
import friends from '../data/friendList.json'
import history from '../data/transactionHistory.json';

export const App = () => {
  return (
    <div>
      <Profile data={user} />
      <Statistics data={data} />    
      <FriendList friends={friends} />
      <TransactionHistory history={history} />
    </div>


  );
};
