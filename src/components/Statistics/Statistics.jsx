import React from 'react';
import PropTypes from 'prop-types';
import { Stats, StatsList, StatsItem } from './Statistics.styled';

export const Statistics = ({ statsData, title }) => {
  return (
    <Stats>
      {title && <h2 className="title">{title}</h2>}
      <StatsList>
        {statsData.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </Stats>
  );
};

Statistics.propTypes = {
  statsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
