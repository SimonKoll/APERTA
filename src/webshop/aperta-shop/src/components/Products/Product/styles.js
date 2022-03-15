import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    //width: '90% !important',
    width: '20vw !important',
    borderRadius: '6pt !important',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    //paddingTop: '90%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  ascIcon: {
    fontSize: '1rem',
    color: '#b90504',
  },
}));
