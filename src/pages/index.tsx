import Head from 'next/head';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    padding: theme.spacing(8, 0, 8)
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar/>
      <Jumbotron/>
      <Container className={classes.gridContainer}>
        <Grid container spacing={4}>
          {[...Array(30)].map((_, index) => (
            <Grid item key={index} sm={2}>
              <Card>
                fasfafaf
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
