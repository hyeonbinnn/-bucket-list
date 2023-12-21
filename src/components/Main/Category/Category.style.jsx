import styled from 'styled-components';

export const Category = styled.dl`
  display: flex;
  flex-wrap: wrap;
  color: var(--main-color);
`;

export const Item = styled.dd`
  margin-right: 0.4rem;
  padding: 0.2rem 1.2rem;
  border-radius: calc(var(--border-radius) * 2);
  background: var(--gray-background);
  font-size: 1.2rem;
`;
