import React from 'react';
import PropTypes from 'prop-types';
import { ItemTransactions } from 'components/ItemTransactions/ItemTransactions';
import { Table, TableTop } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableTop>Type</TableTop>
          <TableTop>Amount</TableTop>
          <TableTop>Currency</TableTop>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <ItemTransactions
            key={id}
            typeItem={type}
            amountItem={amount}
            currencyItem={currency}
          />
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};
