import React from 'react';
import PropTypes from 'prop-types';
import { StatsItem } from './ItemStatistics.styled';

export const ItemStatistics = ({ labelItem, percentageItem }) => {
  return (
    <StatsItem>
      <span className="label">{labelItem}</span>
      <span className="percentage">{percentageItem}%</span>
    </StatsItem>
  );
};

ItemStatistics.propTypes = {
  labelItem: PropTypes.string.isRequired,
  percentageItem: PropTypes.number.isRequired,
};
