import { Link } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
  body {
    font-family: 'Roboto';
  }
`;

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding-top: 2rem;
`;

export const MainHeader = styled.h1`
  margin-bottom: 1rem;
  margin-top: 0;
`;

export const PostHeader = styled.h3`
  margin-top: 0;
`;

export const MainLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`;
