import React from "react";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    }
  },
  xl: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    }
  }
}));

interface PageContentProps {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

function PageContent({children, maxWidth}: React.PropsWithChildren<PageContentProps>) {
  const classes = useStyles();
  const width = maxWidth ?? "xl";

  return (
    <Container className={classes.gridContainer} maxWidth={maxWidth ?? "xl"}>
      {children}
    </Container>
  );
}

export default PageContent;