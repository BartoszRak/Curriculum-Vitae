import { makeStyles } from '@material-ui/core'

export default makeStyles(({ breakpoints, palette, spacing }) => ({
  emoji: {
    fontSize: '2rem',
    [breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  },
  root: {
    width: '100%',
  },
  section: {},
  tile: {
    alignItems: 'center',
    background: palette.secondary.main,
    borderRadius: spacing(0.5),
    breakInside: 'avoid-column',
    columnBreakInside: 'avoid',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 200,
    padding: spacing(3),
    pageBreakInside: 'avoid',
    width: '100%',
    [breakpoints.down('md')]: {
      marginBottom: spacing(4),
    },
  },
  tileDescription: {
    marginTop: spacing(1.5),
    width: '100%',
  },
  tileImage: {
    borderRadius: spacing(0.5),
    marginTop: spacing(1.5),
    objectFit: 'cover',
    position: 'relative',
    width: '100%',
  },
  tilesHolder: {
    columnGap: 80,
    [breakpoints.up('md')]: {
      columnCount: 3,
    },
    [breakpoints.down('md')]: {
      columnCount: 1,
    },
  },
  title: {
    marginBottom: spacing(4),
    [breakpoints.down('md')]: {
      fontSize: '2.3rem',
      marginBottom: spacing(3),
    },
    [breakpoints.down('sm')]: {
      fontSize: '1.8rem',
      marginBottom: spacing(2),
    },
  },
}))
