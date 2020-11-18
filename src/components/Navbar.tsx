import React from 'react';
import NextLink from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {makeStyles, fade} from "@material-ui/core/styles";

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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(1),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 0,
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" color="inherit">
            MagesticStore
          </Typography>
          <div className={classes.buttons}>
            <ButtonLink href="/">Início</ButtonLink>
            <ButtonLink href="/about">Sobre</ButtonLink>
            <ButtonLink href="/contact">Contato</ButtonLink>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Pesquisar…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{'aria-label': 'pesquisar'}}
            />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;