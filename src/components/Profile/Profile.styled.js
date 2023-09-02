import { styled } from 'styled-components';

export const ProfileUser = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 1%;
  padding: 15px;
  background-color: white;
  text-align: center;
  font-size: 16px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const StaticticUserList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const ItemStats = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
`;
