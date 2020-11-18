import Head from 'next/head';
import PageLayout from "../components/PageLayout";
import PageContent from "../components/PageContent";
import Jumbotron from '../components/Jumbotron';
import withSearch from "../withSearch";

function AboutPage() {
  return (
    <>
      <Head>
        <title>Sobre | MajesticStore</title>
      </Head>

      <PageLayout>
        <Jumbotron title="Sobre"/>
        <PageContent>
          Sobre
        </PageContent>
      </PageLayout>
    </>
  )
}

export default withSearch(AboutPage);