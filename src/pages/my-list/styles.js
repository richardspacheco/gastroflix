/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Table = styled.table`
  margin: 16px 0;
  border-collapse: collapse;
`;

Table.Header = styled.th`
  padding: 8px;
  text-align: left;
`;

Table.Row = styled.tr`
  &:not(:last-child) td {
    border-bottom: 1px solid white;
  }
`;

Table.Cell = styled.td`
  padding: 8px;
`;
