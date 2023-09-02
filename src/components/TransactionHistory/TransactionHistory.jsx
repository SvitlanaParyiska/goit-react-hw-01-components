import React from 'react';
import PropTypes from 'prop-types';
import { ItemTransactions } from 'components/ItemTransactions/ItemTransactions';
import { Table, TableTop, FirstLine } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <FirstLine>
        <tr>
          <TableTop>Type</TableTop>
          <TableTop>Amount</TableTop>
          <TableTop>Currency</TableTop>
        </tr>
      </FirstLine>

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
