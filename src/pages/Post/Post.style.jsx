import styled from 'styled-components';
import { Banner, BannerContents } from '../../components/Banner/Banner.style';

export const PostBanner = styled(Banner)`
  background: url(${(props) => props.mainBg}) no-repeat 50% 50% / cover;
  z-index: -1;
`;

export const PostBannerContents = styled(BannerContents)``;

export const PostSection = styled.section`
  width: 80%;
  background-color: white;
`;

export const PostAuthor = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  color: #767676;
`;

export const PostProfileImg = styled.img`
  width: 2em;
  height: 2em;
  border-radius: 50%;
`;

export const PostCreated = styled.span`
  align-items: center;

  ::before {
    content: '';
    display: block;
    width: 1px;
    height: 0.8em;
    margin-right: 1rem;
    background: var(--border-color);
  }
`;

export const PostCategory = styled.div``;

export const PostTitle = styled.div``;

export const ContentsWrap = styled.div``;
