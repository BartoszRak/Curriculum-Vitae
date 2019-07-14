import { makeStyles } from '@material-ui/core'

export default makeStyles(({ spacing, palette }) => ({
  actions: {
    borderBottom: '4px solid rgba(0, 0, 0, 0)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontWeight: 'normal',
    marginTop: spacing(1),
  },
  favoriteActions: {
    borderBottom: `4px solid ${palette.error.main}`,
  },
  favoriteIconButton: {
    color: palette.error.main,
  },
  href: {
    textDecoration: 'none',
  },
  hrefButton: {
    borderRadius: spacing(1),
    textTransform: 'uppercase',
  },
  icon: {
    height: '1rem',
    width: '1rem',
  },
  root: {
    height: 'auto',
    textDecoration: 'none',
    width: '100%',
  },
  tag: {
    background: palette.primary.main,
    borderRadius: spacing(2),
    color: palette.primary.contrastText,
    fontWeight: 'normal',
    marginBottom: spacing(1),
    marginRight: spacing(2),
    padding: spacing(0, 1.5),
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing(2),
  },
  title: {
    borderLeft: `4px solid ${palette.primary.main}`,
    fontWeight: 'normal',
    paddingLeft: spacing(1.5),
  },
  wrapper: {
    breakInside: 'avoid',
    columnBreakInside: 'avoid',
    display: 'table',
    height: 'auto',
    paddingBottom: spacing(4),
    paddingTop: 1,
    pageBreakInside: 'avoid',
    textDecoration: 'none',
    width: '100%',
  },
}))
