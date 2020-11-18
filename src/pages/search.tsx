import React from "react";
import Head from 'next/head';
import { Configure, Highlight, Hits, Pagination } from "react-instantsearch-dom";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import PageLayout from "../components/PageLayout";
import PageContent from "../components/PageContent";
import Jumbotron from '../components/Jumbotron';
import withSearch from "../withSearch";

const sectionUseStyles = makeStyles(theme => ({
  section: {
    paddingBottom: theme.spacing(3)
  }
}));

function Section({title, children}: React.PropsWithChildren<{ title?: string; }>) {
  const classes = sectionUseStyles();
  return (
    <section className={classes.section}>
      {title && <Typography variant="h4" component="h3" gutterBottom>
        {title}
      </Typography>}
      {children}
    </section>
  );
}

const HitComponent = ({ hit }) => <Highlight attribute="name" hit={hit} />;

function IndexPage() {
  return (
    <>
      <Head>
        <title>Home | MagesticStore</title>
      </Head>

      <PageLayout>
        <Jumbotron title="Pesquisa"/>
        <PageContent>
          <Configure hitsPerPage={4} />
          <Hits hitComponent={HitComponent} />
          <Pagination />
        </PageContent>
      </PageLayout>
    </>
  )
}

export default withSearch(IndexPage);