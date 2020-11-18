import React from "react";
import Head from 'next/head';
import { Configure } from "react-instantsearch-dom";
import Box from "@material-ui/core/Box";
import PageLayout from "../components/PageLayout";
import PageContent from "../components/PageContent";
import Jumbotron from '../components/Jumbotron';
import SearchResults from '../components/search/SearchResults';
import SearchPagination from '../components/search/SearchPagination';
import withSearch from "../withSearch";

function SearchPage(props) {
  return (
    <>
      <Head>
        <title>Pesquisa "{props.searchState.query}" | MajesticStore</title>
      </Head>

      <PageLayout>
        <Jumbotron title="Pesquisa"/>
        <PageContent>
          <Configure hitsPerPage={12}/>
          <SearchResults/>
          <Box marginTop={4}>
            <SearchPagination/>
          </Box>
        </PageContent>
      </PageLayout>
    </>
  );
}

export default withSearch(SearchPage);