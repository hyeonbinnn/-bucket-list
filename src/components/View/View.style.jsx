import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ArrowLeft from '../../assets/ArrowLeft-blue.svg';
import IconLikeWhite from '../../assets/icon-like-white.svg';
import IconLike from '../../assets/icon-like.svg';
import IconDelete from '../../assets/icon-delete.svg';
import IconModify from '../../assets/icon-modify.svg';
import IconDeleteWhite from '../../assets/icon-delete-white.svg';
import IconModifyWhite from '../../assets/icon-modify-white.svg';

export const PostContainer = styled.div``;

export const PostSection = styled.section`
  position: relative;
  width: 91.2rem;
  max-width: 100%;
  margin: -30rem 0 auto auto;
  padding: 8rem;
  border-radius: var(--border-radius);
  background: var(--white-color);
  font-size: 4rem;
  transition: all 0.3s;

  hr {
    border: 1px solid var(--border-color);
    border-width: 1px 0 0 0;
    margin: 3.2rem 0;
  }

  @media (max-width: 640px) {
    padding: 4rem;
  }

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: -35rem;
    padding: 6rem;
  }
`;

export const PostInner = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  font-size: 1.6rem;
`;

// Title
export const TitleWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const TitleH2 = styled.h2`
  width: 100%;
  text-transform: none;
  font-size: 3.2rem;
  font-weight: bold;
`;

export const TitleBtn = styled.button`
  width: 12rem;
  height: 4rem;
  padding-left: 3rem;
  border: 1px solid rgba(var(--red-rgb), 0.5);
  border-radius: var(--border-radius);
  background: var(--white-color) url(${IconLike}) no-repeat 2.5rem 50% / 2.4rem;
  transition: all 0.3s;
  flex-shrink: 0;

  &:hover {
    background: var(--red-color) url(${IconLikeWhite}) no-repeat 2.5rem 50% / 2.4rem;
    color: var(--white-color);
  }

  &:focus {
    outline-color: rgba(var(--red-rgb), 0.2);
    box-shadow: none;
  }
`;

// Contents
export const ContentsWrap = styled.div``;

export const ContentsP = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  text-align: justify;
  letter-spacing: -0.01em;
`;

export const ContentsImg = styled.img`
  max-width: 100%;
  margin: 3.2rem 0;
`;

// Button
export const BackLink = styled(Link)`
  position: absolute;
  top: 8rem;
  left: 0;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  background: var(--gray-background) url(${ArrowLeft}) no-repeat 50% 50% / 4rem;
  font-size: 1.6rem;

  @media (max-width: 640px) {
    top: 4rem;
  }

  @media (max-width: 1024px) {
    top: 6rem;
    width: 5.2rem;
    height: 5.2rem;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  top: 9.2rem;
  right: 8rem;
  font-size: 1.6rem;

  @media (max-width: 640px) {
    top: 4rem;
    right: 4rem;
  }

  @media (max-width: 1024px) {
    top: 6rem;
    right: 6rem;
    height: 5.2rem;
  }
`;

export const ShareBtn = styled.button`
  width: 4rem;
  height: 4rem;
  border: 0;
  border-radius: var(--border-radius);
  transition: all 0.3s;
`;

export const DeleteBtn = styled(ShareBtn)`
  background: var(--gray-background) url(${IconDelete}) no-repeat 50% 50% / 1.6rem;

  &:focus {
    outline-color: rgba(var(--red-rgb), 0.2);
    box-shadow: 0 0 0 1px var(--red-color);
  }

  &:hover {
    background: var(--red-color) url(${IconDeleteWhite}) no-repeat 50% 50% / 1.6rem;
  }
`;

export const ModifyBtn = styled(ShareBtn, Link)`
  background: var(--gray-background) url(${IconModify}) no-repeat 50% 50% / 1.6rem;
  right: 13rem;

  &:hover {
    background: var(--main-color) url(${IconModifyWhite}) no-repeat 50% 50% / 1.6rem;
  }
`;
