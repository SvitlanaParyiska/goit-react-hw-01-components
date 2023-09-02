import { styled } from 'styled-components';

export const Stats = styled.section`
  text-align: center;
  font-size: 16px;
  padding: 15px;
  background-color: white;
  border-radius: 1%;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const TextTitle = styled.h2`
  text-transform: uppercase;
`;

export const StatsItem = styled.li`
  color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
