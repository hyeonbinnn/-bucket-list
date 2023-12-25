import styled from 'styled-components';
import { Banner, BannerContents } from '../../components/Banner/Banner.style';

export const PostBanner = styled(Banner)`
  background: url(${(props) => props.mainBg}) no-repeat 50% 50% / cover;
  z-index: -1;
`;

export const PostBannerContents = styled(BannerContents)``;

export const Today = styled.p`
  padding-left: 0.8em;
  font-size: 6rem;
  font-weight: bold;
  text-align: left;
  line-height: 1.1;

  @media (max-width: 768px) {
    text-align: center;
    padding-left: 0;
  }

  @media (max-width: 1260px) {
    font-size: 3rem;
    padding-left: 0.2em;
  }
`;
