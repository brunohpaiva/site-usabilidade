import Head from 'next/head';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import PageLayout from "../components/PageLayout";
import Jumbotron from '../components/Jumbotron';
import withSearch from "../withSearch";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    padding: theme.spacing(4, 2, 4, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 4, 8, 4)
    }
  }
}));

function AboutPage() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Sobre | MajesticStore</title>
      </Head>

      <PageLayout>
        <Jumbotron title="Sobre"/>
        <Container className={classes.gridContainer} maxWidth="xl">
          Sobre
        </Container>
      </PageLayout>
    </>
  )
}

export default withSearch(AboutPage);