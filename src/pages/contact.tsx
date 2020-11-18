import Head from 'next/head';
import PageLayout from "../components/PageLayout";
import PageContent from "../components/PageContent";
import Jumbotron from '../components/Jumbotron';
import withSearch from "../withSearch";


function ContactPage() {
  return (
    <>
      <Head>
        <title>Contato | MajesticStore</title>
      </Head>

      <PageLayout>
        <Jumbotron title="Contato"/>
        <PageContent>
          Contato
        </PageContent>
      </PageLayout>
    </>
  )
}

export default withSearch(ContactPage);