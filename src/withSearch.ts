import algoliasearch from "algoliasearch/lite";
import {withInstantSearch} from "next-instantsearch";
import type {NextComponentType} from "next";
import qs from 'qs';

const searchClient = algoliasearch("2J7F87Z24O", "7c75b682eec1c37239805e5aae55cb80");

function withSearch(component: NextComponentType) {
  return withInstantSearch({
    indexName: 'site-usablidade',
    searchClient,
    onSearchStateChange: (searchState, router) => {
      router.push(`/search?${qs.stringify(searchState)}`);
    }
  })(component);
}

export default withSearch;