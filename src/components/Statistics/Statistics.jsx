import React from 'react';
import PropTypes from 'prop-types';
import { ItemStatistics } from 'components/ItemStatistics/ItemStatistics';
import { Stats, StatsList } from './Statistics.styled';

export const Statistics = ({ statsData, title }) => {
  return (
    <Stats>
      {title && <h2 className="title">{title}</h2>}
      <StatsList>
        {statsData.map(({ id, label, percentage }) => (
          <ItemStatistics
            key={id}
            labelItem={label}
            percentageItem={percentage}
          />
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
