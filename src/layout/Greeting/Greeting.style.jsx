import backgroundUrl from '~assets/images/landscape-mountains-nature-dark.jpg'

export default ({ breakpoints, palette, spacing }) => ({
  avatar: {
    border: `2px solid ${palette.secondary.main}`,
    height: 250,
    marginBottom: 60,
    width: 250,
  },
  root: {
    alignItems: 'center',
    background: `url(${backgroundUrl})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
  },
  subsubtitle: {
    fontWeight: 'lighter',
    marginTop: spacing.unit * 0.5,
    textAlign: 'center',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    [breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  subtitle: {
    textAlign: 'center',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    [breakpoints.down('sm')]: {
      fontSize: '1.6rem',
    },
  },
  title: {
    textAlign: 'center',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    [breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
})
