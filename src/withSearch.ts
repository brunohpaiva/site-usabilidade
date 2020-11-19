import algoliasearch from "algoliasearch/lite";
import {withInstantSearch} from "next-instantsearch";
import qs from 'qs';

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.NEXT_PUBLIC_ALGOLIA_API_KEY);

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