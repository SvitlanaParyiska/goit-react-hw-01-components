import { styled } from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 6px;
  background-color: white;
  font-size: 16px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const FirstLine = styled.thead`
  color: white;
  text-transform: uppercase;
  background-color: rgb(19, 228, 228);
`;

export const TableTop = styled.th`
  padding: 15px 50px;
`;

export const TransactionItem = styled.td`
  padding: 15px 50px;
  font-weight: normal;
`;

export const LineTable = styled.tr`
  &:nth-child(even) {
    background-color: rgb(219, 237, 248);
  }
`;
