import React from 'react';
import PropTypes from 'prop-types';
import { TransactionItem } from './ItemTransactions.styled';

export const ItemTransactions = ({ typeItem, amountItem, currencyItem }) => {
  return (
    <tr>
      <TransactionItem>{typeItem}</TransactionItem>
      <TransactionItem>{amountItem}</TransactionItem>
      <TransactionItem>{currencyItem}</TransactionItem>
    </tr>
  );
};

ItemTransactions.propTypes = {
  typeItem: PropTypes.string.isRequired,
  amountItem: PropTypes.string.isRequired,
  currencyItem: PropTypes.string.isRequired,
};
