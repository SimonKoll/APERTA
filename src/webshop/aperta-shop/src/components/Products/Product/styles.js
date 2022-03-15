import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    //width: '90% !important',
    width: '38vh !important',
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
}));
