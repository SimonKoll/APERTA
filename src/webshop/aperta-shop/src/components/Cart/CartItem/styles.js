import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  Croot: {
    // maxWidth: 345, original width style
    //width: '90% !important',
    width: '16vw !important',
    borderRadius: '6pt !important',
    //marginBottom: '1.25rem',
    //display: 'grid',
    //gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
    //gap between cards 1.25rem
    //gridGap: '1.25rem',
  },
  Cmedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    //paddingTop: '90%',
  },
  CcardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  CcardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  Cbuttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));
