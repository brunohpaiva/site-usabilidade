import React from "react";
import {connectPagination} from 'react-instantsearch-dom';
import Pagination from '@material-ui/lab/Pagination';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  ul: {
    justifyContent: 'center'
  }
});

function SearchPagination({nbPages, currentRefinement, refine}) {
  const classes = useStyles();

  const handleChange = (event, page) => {
    refine(page);
  };

  return (
    <Pagination
      count={nbPages}
      page={currentRefinement}
      onChange={handleChange}
      classes={classes}
    />
  );
}

const ConnectedSearchPagination = connectPagination(SearchPagination);

export default ConnectedSearchPagination;