import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  cartToolbar: theme.mixins.toolbar,
  mainCartContent: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(10),
    height: '100%',
  },
  root: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
  },
}));
