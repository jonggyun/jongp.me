import React from 'react';
import {
  GlobalStyle,
  Wrapper,
  MainHeader,
  PostHeader,
  MainLink,
} from './styled';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    return (
      <React.Fragment>
        <GlobalStyle />
        <Wrapper>
          <header>
            {location.pathname === rootPath ? (
              <MainHeader>
                <MainLink to={'/'}>{title}</MainLink>
              </MainHeader>
            ) : (
              <PostHeader>
                <MainLink to={'/'}>{title}</MainLink>
              </PostHeader>
            )}
          </header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default Layout;
