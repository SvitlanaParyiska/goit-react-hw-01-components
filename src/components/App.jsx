import { Profile } from './Profile/Profile';
import userData from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import statisticsData from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import historyTransactions from '../data/transactions.json';
import { MainDiv, ThemeColor } from './App.styled';

export const App = () => {
  return (
    <ThemeColor>
      <MainDiv>
        <Profile userProfile={userData} />
        <div>
          <Statistics statsData={statisticsData} title="Upload stats" />
          <FriendList friendsData={friends} />
        </div>
      </MainDiv>
      <TransactionHistory items={historyTransactions} />
    </ThemeColor>
  );
};
