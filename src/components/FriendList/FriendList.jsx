import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Freinds } from './FriendList.styled';

export const FriendList = ({ friendsData }) => {
  return (
    <Freinds>
      {friendsData.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatarItem={avatar}
          nameItem={name}
          isOnlineItem={isOnline}
        />
      ))}
    </Freinds>
  );
};

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(PropTypes.object.isRequired),
};
