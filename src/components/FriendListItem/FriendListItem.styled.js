import { styled } from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  background-color: white;
  border-radius: 1%;
  margin-top: 10px;
  padding: 8px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const StatusUser = styled.span(({ $isOnline }) => {
  return {
    backgroundColor: $isOnline ? '#55ac57' : '#ff5153',
    marginLeft: '15px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
  };
});
