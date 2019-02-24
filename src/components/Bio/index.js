import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../../utils/typography';
import AboutBtn from '../AboutBtn';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <div>
              <span>
                Written by <strong>{author}</strong>
              </span>{' '}
              <AboutBtn />
              <br />
              <p>Front-End developer.</p>
            </div>
          </div>
        );
      }}
    />
  );
}

// get result by query
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
          github
        }
      }
    }
  }
`;

export default Bio;
