import React from 'react';

import './styles.scss';
import '../styles/markdown.scss';

class AboutPage extends React.Component {
  render() {
    const node = this.props.data.allMarkdownRemark.edges[0].node;
    return (
      <section className="about-page">
        <div
          className="markdown-body about-div"
          dangerouslySetInnerHTML={{ __html: node.html }}
        />
      </section>
    );
  }
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "" } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
