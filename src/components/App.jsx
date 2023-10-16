import {Profile} from './firstTask/Profile/Profile'
import user from '../user.json'
import data from './secondTask/data.json'
import { Statistics } from './secondTask/Statistics'
import friends from './thirdTask/friends.json';
import { FriendList } from './thirdTask/FriendList'
import transactions from './fourTask/transactions.json';
import { TransactionHistory } from "./fourTask/TransactionHistory";

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

