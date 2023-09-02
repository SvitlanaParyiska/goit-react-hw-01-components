import React from 'react';
import PropTypes from 'prop-types';
import { Stats, StatsList, StatsItem, TextTitle } from './Statistics.styled';
import { getRandomHexColor } from './getRandomHexColor';

export const Statistics = ({ statsData, title }) => {
  return (
    <Stats>
      {title && <TextTitle>{title}</TextTitle>}
      <StatsList>
        {statsData.map(({ id, label, percentage }) => (
          <StatsItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
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
