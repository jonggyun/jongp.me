import styled from 'styled-components';
import Image from 'gatsby-image';

export const UserImage = styled(Image)`
  margin-right: 1rem;
  margin-bottom: 0;
  min-width: 3.125rem;
  border-radius: 100%;
`;

export const BioDiv = styled.div`
  display: flex;
  margin-bottom: 2.5rem;
`;

export const InfoDiv = styled.div`
  span {
    display: block;
  }
`;
