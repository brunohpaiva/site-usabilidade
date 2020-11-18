import algoliasearch from "algoliasearch/lite";
import {withInstantSearch} from "next-instantsearch";
import qs from 'qs';
import {WithInstantSearchOptions} from "next-instantsearch/build/with-instantsearch";

const searchClient = algoliasearch("2J7F87Z24O", "7c75b682eec1c37239805e5aae55cb80");

function withSearch(component: unknown, includeIndexName = true) {
  return withInstantSearch({
    indexName: includeIndexName ? 'site-usablidade' : undefined,
    searchClient,
    onSearchStateChange: (searchState, router) => {
      router.push(`/search?${qs.stringify(searchState)}`);
    },
  })(component);
}

export default withSearch;