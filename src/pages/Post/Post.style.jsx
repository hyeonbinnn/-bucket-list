import styled from 'styled-components';
import { Banner, BannerContents } from '../../components/Banner/Banner.style';

export const PostBanner = styled(Banner)`
  background: url(${(props) => props.mainBg}) no-repeat 50% 50% / cover;
  z-index: -1;
`;

export const PostBannerContents = styled(BannerContents)``;
