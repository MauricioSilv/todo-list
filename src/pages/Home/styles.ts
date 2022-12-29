import styled from 'styled-components';

type PropsTextColor = {
  isPurple?: boolean;
};

export const Container = styled.div`
  max-width: 46rem;
  margin: auto;
  @media (max-width: 768px) {
    margin: 0 1.5rem;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: auto;
  min-height: 12.5rem;
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray_700};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: -1.875rem;
  gap: 8px;
`;

export const Content = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`;
export const IndicatorContent = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IndicatorText = styled.h5<PropsTextColor>`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.059rem;
  color: ${({ theme, isPurple }) =>
    isPurple ? theme.colors.purple : theme.colors.blue};
  display: flex;
  gap: 10px;
`;

export const IndicatorCount = styled.p`
  min-width: 25px;
  min-height: 19px;
  border-radius: 999px;
  padding: 2px 8px 2px 8px;
  background-color: ${({ theme }) => theme.colors.gray_400};
  font-size: 12px;
  font-weight: 700;
  line-height: 14.52px;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray_200};
`;

export const ContentList = styled.div``;
