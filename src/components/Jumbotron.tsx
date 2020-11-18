import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  jumbotron: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 3),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 0, 6),
    }
  }
}));

interface JumbotronProps {
  title: string;
  subtitle?: string;
}

function Jumbotron({title, subtitle}: JumbotronProps) {
  const classes = useStyles();

  return (
    <div className={classes.jumbotron}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom={!!subtitle}>
          {title}
        </Typography>
        {subtitle && <Typography component="p" variant="h5" align="center" color="textSecondary">
          {subtitle}
        </Typography>}
      </Container>
    </div>
  );
}

export default Jumbotron;