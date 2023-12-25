import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OnlyPc = styled.li`
  @media (max-width: 640px) {
    .only-pc {
      display: none;
    }
  }
`;

export const ButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  height: 4rem;
  padding: 0.2rem 1.2em 0;
  border: 0;
  border-radius: var(--border-radius);
  background: var(--main-color);
  color: var(--white-color);
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1;

  @media (max-width: 640px) {
    width: 4.4rem;
    height: 4.4rem;
    padding: 0;
    border-radius: 50%;

    span {
      overflow: hidden;
      position: absolute;
      clip: rect(0, 0, 0, 0);
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;
    }
  }
`;

export const ButtonImg = styled.img`
  height: 1.2em;
  margin-top: -0.2rem;
  vertical-align: middle;
`;

export const ButtonGray = styled(ButtonLink)`
  background: var(--gray-background);
  color: var(--black-color);
`;

export const ButtonWhite = styled(ButtonLink)`
  padding: 0.2rem 0.8em 0;
  background: var(--white-color);
  color: var(--black-color);

  img {
    height: 1.4em;
  }
`;
