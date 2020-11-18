import React, {useEffect, useState} from "react";
import {connectSearchBox} from 'react-instantsearch-dom';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import {fade, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
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

interface SearchFieldProps {
  currentRefinement: string;
  refine: Function;
}

const SearchField = React.forwardRef<unknown, SearchFieldProps>(function (props, ref) {
  const classes = useStyles();
  const {currentRefinement, refine} = props;
  const [render, setRender] = useState(false);
  const [value, setValue] = useState(currentRefinement);

  useEffect(() => {
    setRender(true);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key.toLowerCase() === "enter") {
      refine(value);
    }
  };

  if (!render) {
    return <p>Loading search...</p>;
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon/>
      </div>
      <InputBase
        ref={ref}
        id="name-search"
        name="name"
        placeholder="Pesquisar…"
        defaultValue={currentRefinement}
        onChange={handleChange}
        onKeyDown={handleEnter}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{'aria-label': 'Pesquisar'}}
      />
    </div>
  );
});

const ConnectedSearchField = connectSearchBox(SearchField);

export default ConnectedSearchField;