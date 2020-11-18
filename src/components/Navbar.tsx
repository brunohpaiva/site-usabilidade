import React from 'react';
import NextLink from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import SearchField from '../components/search/SearchField';

interface ButtonLinkProps {
  href: string;
}

function ButtonLink({href, children}: React.PropsWithChildren<ButtonLinkProps>) {
  return (
    <NextLink href={href} passHref>
      <Button color="inherit">
        {children}
      </Button>
    </NextLink>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex'
  },
  buttons: {
    flexGrow: 1,
    padding: theme.spacing(0, 1),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
}));

interface NavbarProps {
  showSearch?: boolean;
}

function Navbar({showSearch}: NavbarProps) {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" color="inherit">
            MajesticStore
          </Typography>
          <div className={classes.buttons}>
            <ButtonLink href="/">Início</ButtonLink>
            <ButtonLink href="/about">Sobre</ButtonLink>
            <ButtonLink href="/contact">Contato</ButtonLink>
          </div>
          {showSearch && <SearchField/>}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;