import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const About = styled.aside`
  flex-basis: calc((100% - 2.4rem * 3) / 4);
  flex-shrink: 0;
  align-self: flex-start;
  padding: 4rem 2.4rem 7rem;
  box-sizing: border-box;
  border-radius: var(--border-radius);
  background: var(--white-color);
  text-align: center;
  font-size: 2rem;

  h2,
  h3 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: underline;
    letter-spacing: 0.1em;
  }

  h3 {
    margin-top: 6rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const UserProfile = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserName = styled.p`
  color: var(--main-color);
  font-weight: bold;
  font-size: 1.6rem;
  margin: 1.2rem 0 0.8rem;
`;

export const UserDescription = styled.p`
  font-size: 1.4rem;
  padding: 0 0.4rem;
`;

export const Categories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

export const CategoryLink = styled(Link)`
  background: var(--gray-background);
  color: var(--gray-text);
  font-size: 1.2rem;
  border-radius: calc(var(--border-radius) * 2);
  padding: 0.2rem 1.2rem;
`;

export const Sns = styled.ul`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  margin-top: -0.4rem;
`;

export const SnsLink = styled(Link)`
  display: block;
  padding: 0.4rem;
  line-height: 1;
`;

export const SnsImg = styled.img`
  width: 1.6rem;
  display: block;
`;
