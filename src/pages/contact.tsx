import React, {useState} from "react";
import Head from 'next/head';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PageLayout from "../components/PageLayout";
import PageContent from "../components/PageContent";
import Jumbotron from '../components/Jumbotron';
import withSearch from "../withSearch";

function ContactPage() {
  const [state, setState] = useState({
    nome: "",
    telefone: "",
    mensagem: ""
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState({
      nome: "",
      telefone: "",
      mensagem: ""
    });
    alert("Contato enviado");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contato | MajesticStore</title>
      </Head>

      <PageLayout>
        <Jumbotron title="Contato"/>
        <PageContent maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <form onSubmit={onSubmit}>
                <TextField name="nome" label="Nome" onChange={onChange} value={state.nome} fullWidth />
                <TextField name="telefone" label="Telefone" onChange={onChange} value={state.telefone} fullWidth />
                <TextField name="mensagem" label="Mensagem" onChange={onChange} value={state.mensagem} fullWidth />
                <Button type="submit" color="primary" variant="contained">
                  Enviar
                </Button>
              </form>
            </Grid>
          </Grid>
        </PageContent>
      </PageLayout>
    </>
  )
}

export default withSearch(ContactPage);