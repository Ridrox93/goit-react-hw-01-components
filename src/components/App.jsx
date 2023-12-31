import {Profile} from './Profile/Profile/Profile'
import user from '../user.json'
import data from './Statistics/data.json'
import { Statistics } from './Statistics/Statistics'
import friends from './FriendList/friends.json';
import { FriendList } from './FriendList/FriendList'
import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {

  return (
    <>
      <Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats} />
      <Statistics stats={data} title="upload stats" />
      <FriendList friends={friends} /> 
      <TransactionHistory items={transactions} />

    </>
  );
};

