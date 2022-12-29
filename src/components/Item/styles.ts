import styled from 'styled-components';

type PropsText = {
  isChecked?: boolean;
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.gray_500};
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  align-items: center;
  height: auto;
  &:first-child {
    margin-top: 25px;
  }

  margin-bottom: 12px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.p<PropsText>`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.225rem;
  color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.gray_300 : theme.colors.gray_100};
  text-decoration: ${({ isChecked }) =>
    isChecked ? 'line-through' : 'normal'};
`;

export const IconButtonCheck = styled.span<PropsText>`
  color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.purple : theme.colors.blue};
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;

export const IconButtonTrash = styled.span`
  color: ${({ theme }) => theme.colors.gray_300};
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 5px;
  transition: background-color 0.1s;

  &:hover {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.gray_400};
    color: ${({ theme }) => theme.colors.red_danger};
  }
`;
