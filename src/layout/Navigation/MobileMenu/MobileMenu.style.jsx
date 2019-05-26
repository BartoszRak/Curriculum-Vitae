import backgroundUrl from '~assets/images/landscape-mountains-nature-dark-blur.jpg'

export default ({ palette }) => ({
  backdrop: {
    background: `url(${backgroundUrl})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  dialog: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  item: {
    color: palette.secondary.main,
    fontSize: '1.3rem',
  },
  list: {
    textShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
  },
})
