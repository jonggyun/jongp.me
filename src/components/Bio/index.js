import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { UserImage, BioDiv, InfoDiv } from './styled';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <BioDiv>
            <UserImage fixed={data.avatar.childImageSharp.fixed} alt={author} />
            <InfoDiv>
              <span>
                Written by <strong>{author}</strong>
              </span>
              <span>
                Front-End Devoloper. Working at <strong>Plutusds.</strong>
              </span>
            </InfoDiv>
          </BioDiv>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile_img.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
