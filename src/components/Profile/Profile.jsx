import React from 'react';
import PropTypes from 'prop-types';
import {
  StaticticUserList,
  ItemStats,
  Photo,
  ProfileUser,
} from './Profile.styled';

export const Profile = ({ userProfile }) => {
  const { username, tag, location, avatar, stats } = userProfile;
  return (
    <ProfileUser>
      <div className="description">
        <Photo src={avatar} alt={username} />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <StaticticUserList>
        <ItemStats>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </ItemStats>
        <ItemStats>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </ItemStats>
        <ItemStats>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </ItemStats>
      </StaticticUserList>
    </ProfileUser>
  );
};

Profile.propTypes = {
  userProfile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
