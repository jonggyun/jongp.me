import React, { Component } from 'react';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import '../styles/markdown.css';

class About extends Component {
  render() {
    const about = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={about.frontmatter.title}
          description={about.frontmatter.description}
        />
        <article>
          <section dangerouslySetInnerHTML={{ __html: about.html }} />
        </article>
      </Layout>
    );
  }
}

export default About;

export const AboutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { date: { eq: null } }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
