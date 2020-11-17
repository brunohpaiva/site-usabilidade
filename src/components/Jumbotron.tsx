import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  jumbotron: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
}));

function Jumbotron() {
  const classes = useStyles();

  return (
    <div className={classes.jumbotron}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Aaaa
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          fafasfasfasfa fas fa fa fsa fa f
        </Typography>
      </Container>
    </div>
  );
}

export default Jumbotron;