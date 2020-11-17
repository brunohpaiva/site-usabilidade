import Head from 'next/head';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import products from "../products";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    padding: theme.spacing(4, 2, 4, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8, 4, 8, 4)
    }
  }
}));

function IndexPage() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar/>
      <Jumbotron/>
      <Container className={classes.gridContainer} maxWidth="xl">
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} xl={2}>
              <ProductCard product={product}/>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer/>
    </>
  )
}

export default IndexPage;