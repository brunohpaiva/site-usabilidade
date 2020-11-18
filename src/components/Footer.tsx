import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 3, 0),
  }
}));

function Footer() {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container>
          <Grid item md={8}>
            <Typography variant="h6">
              MajesticStore
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              Rua Rondônia, 474 - Nossa Senhora Aparecida, Francisco Beltrão - PR, 85601-100
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p">
              <Link color="inherit" href="mailto:contato@site-usabilidade.bruno.codes">
                contato@site-usabilidade.bruno.codes
              </Link>&nbsp;
              Tel: (46) 2697-3283
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Copyright &copy;&nbsp;
              <Link color="inherit" href="https://site-usabilidade.bruno.codes/">
                MajesticStore
              </Link>&nbsp;
              {year}
              {'.'}
            </Typography>
          </Grid>
          <Grid item md={4}>
            <IconButton aria-label="Facebook" color="primary" href="https://facebook.com/majesticstore">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Facebook" color="primary" href="https://twitter.com/majesticstore">
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="Facebook" color="primary" href="https://instagram.com/majesticstore">
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;