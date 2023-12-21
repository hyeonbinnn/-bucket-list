import styled from 'styled-components';
import arrowTop from '../../assets/ArrowTop.svg';

export const Footer = styled.footer`
  background: var(--white-color);
  margin-top: 10rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  position: relative;
`;

export const H2 = styled.div`
  color: var(--gray-color);
  font-weight: bold;
`;

export const TopButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 6.4rem;
  height: 6.4rem;
  padding: 2.2rem 0rem 0.3rem 0rem;
  border: 0;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  background: var(--main-color) url(${arrowTop}) no-repeat 50% 0rem / 4rem;
  color: var(--white-color);
  text-align: center;
  font-weight: bold;
`;
