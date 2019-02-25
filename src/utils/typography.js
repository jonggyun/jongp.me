import Typography from 'typography';
import githubTheme from 'typography-theme-github';

githubTheme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    a: {
      textDecoration: 'none',
      color: 'black',
    },
    'a:hover': {
      textDecoration: 'none',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: '600',
    },
    'h3 a:hover': {
      textDecoration: 'none',
      color: '#868e96',
    },
    h1: {
      border: 0,
      fontWeight: 900,
    },
    footer: {
      display: 'flex',
      flexDirection: 'row-reverse',
      marginTop: '2rem',
    },
    'footer a': {
      fontWeight: 'bold',
    },
    ul: {
      margin: 0,
    },
  };
};

delete githubTheme.googleFonts;

const typography = new Typography(githubTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
