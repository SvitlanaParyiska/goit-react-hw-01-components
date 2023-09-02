import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableTop,
  FirstLine,
  LineTable,
  TransactionItem,
} from './TransactionHistory.styled';

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
          <LineTable key={id}>
            <TransactionItem>{type}</TransactionItem>
            <TransactionItem>{amount}</TransactionItem>
            <TransactionItem>{currency}</TransactionItem>
          </LineTable>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};
