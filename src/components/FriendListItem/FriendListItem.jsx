import React from 'react';
import PropTypes from 'prop-types';
import { FriendItem } from './FriendListItem.styled';
import { StatusUser } from './FriendListItem.styled';

export const FriendListItem = ({ avatarItem, nameItem, isOnlineItem }) => {
  return (
    <FriendItem>
      <StatusUser $isOnline={isOnlineItem}></StatusUser>
      <img className="avatar" src={avatarItem} alt={nameItem} width="48" />
      <p className="name">{nameItem}</p>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatarItem: PropTypes.string.isRequired,
  nameItem: PropTypes.string.isRequired,
  isOnlineItem: PropTypes.bool.isRequired,
};
