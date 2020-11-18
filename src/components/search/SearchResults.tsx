import React from "react";
import {connectHits} from 'react-instantsearch-dom';
import ProductsGrid from "../ProductsGrid";

function SearchResults({ hits }) {
  return (
    <ProductsGrid products={hits}/>
  );
}

const ConnectedSearchResults = connectHits(SearchResults);

export default ConnectedSearchResults;