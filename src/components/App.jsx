import Profile  from './partials/profile';
import Statistics from './partials/statisticsTitle';
import FriendList from './partials/friendList';
import FriendCard from './partials/friendCard';
import TransactionHistory from "./partials/transactionHistory";
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
