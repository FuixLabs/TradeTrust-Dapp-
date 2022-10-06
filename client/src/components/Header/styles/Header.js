import { makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 28,
    marginRight: 40,
    backgroundColor: '#F8F9FA',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'space-between',
      marginLeft: 42,
    },
  },
  openSidebarIcon: {
    cursor: 'pointer',
  },
  statusContainer: {
    backgroundColor: theme.palette.backgroundColor.headerStatus,
    borderRadius: 30,
    padding: '5px 30px 5px 10px',
    display: 'flex',
    flexDirection: 'row',
    color: theme.palette.primary.white,
    alignItems: 'center',
    cursor: 'pointer',
  },
  iconContainer: {
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.success,
    height: 34,
    width: 34,
    marginRight: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnDiv: {
    display: 'flex',
    flexDirection: 'column',
  },
  smallTxt: {
    fontSize: 10,
  },
  normalTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 2,
  },
  popupContainer: {
    padding: 20,
    backgroundColor: theme.palette.primary.white,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 260,
    boxShadow: `0px 8px 12px ${theme.palette.boxShadow.headerPopup}`,
    position: 'relative',
    top: 50,
    right: 40,
  },
  headerIcon: {
    height: 36,
    width: 36,
  },
  cardanoIcon: {
    height: 34,
  },
  tooltipContainer: {
    width: 220,
    padding: 16,
    backgroundColor: `${theme.palette.primary.white}`,
    minWidth: 260,
    minHeight: 150,
    margin: '-4px -8px',
    boxShadow: `0px 8px 12px ${theme.palette.boxShadow.headerPopup}`,
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoutBtn: {
    width: '100%',
    color: theme.palette.primary.white,
    borderRadius: 8,
    backgroundColor: theme.palette.primary.main,
    padding: '10px 20px !important',
    fontWeight: 'bold',
    cursor: 'pointer',
    border: `solid 1px ${theme.palette.buttonColor.secondary}`,
    '&:hover': {
      backgroundColor: theme.palette.buttonColor.secondary,
      color: theme.palette.primary.main,
    },
  },

  descriptionContainer: {
    backgroundColor: '#F2F4F5',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    padding: 18,
    color: '#000000',
    fontSize: 12,
    borderRadius: 8,
  },
  warningIcon: {
    color: `${theme.palette.primary.main} !important`,
  },
  descriptionTxt: {
    width: '80%',
  },
  badgeContainer: {
    marginRight: 25,
    color: theme.palette.backgroundColor.headerStatus,
    fontWeight: 'bold !important',
    padding: '0px !important',
    ' .MuiBadge-badge': {
      padding: '5px !important',
      paddingTop: 0,
      fontWeight: 20,
      color: theme.palette.primary.main,
      border: '2px solid #FAF8F8',
      height: 'fit-content',
      borderRadius: '50%',
      minWidth: '27px',
      minHeight: '27px',
      marginTop: '10px !important',
      marginRight: 500,
    },
  },
}));

export default styles;
