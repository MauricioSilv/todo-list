import styled from 'styled-components';
import { PlusCircle } from 'phosphor-react';

export const ButtonCustom = styled.button`
  background-color: ${({ theme }) => theme.colors.blue_dark};
  width: 100%;
  max-width: 5.625rem;
  height: 3.25rem;
  padding: 16px;
  border-radius: 0.5rem;
  border: none;
  color: ${({ theme }) => theme.colors.gray_100};
  font-size: 0.875rem;
  line-height: 1.225rem;
  font-weight: 700;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const IconCustom = styled(PlusCircle)`
  color: ${({ theme }) => theme.colors.gray_100};
  margin-left: 0.5rem;
`;
