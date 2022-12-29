import styled from 'styled-components';

export const InputCustom = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray_500};
  width: 100%;
  max-width: 638px;
  border: 1px solid ${({ theme }) => theme.colors.gray_700};
  color: ${({ theme }) => theme.colors.gray_100};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_300};
    font-weight: 400;
    line-height: 1.4rem;
  }

  &:active {
    border-color: ${({ theme }) => theme.colors.purple_dark};
  }
`;
