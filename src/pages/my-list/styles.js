/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Table = styled.table`
  margin: 16px 0;
  border-collapse: collapse;
`;

Table.Header = styled.th`
  padding: 8px 16px 8px 8px;
  text-align: left;
  border-bottom: 1px solid white;
`;

Table.Row = styled.tr`
  &:nth-child(even) {
    background-color: #222222;
    border-radius: 8px;
  }
`;

Table.Cell = styled.td`
  padding: 8px 16px 8px 8px;
`;
