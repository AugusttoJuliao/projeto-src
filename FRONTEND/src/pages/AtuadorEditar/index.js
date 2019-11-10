import React, { Component } from 'react';
import {
  H1Styled,
  Select,
  Button,
  Container,
  ContainerContainer,
  Input,
  FormGroup,
  Form, 
} from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { Formik } from "formik";

class Atuador extends Component {

  state = {
    tipoAtuador: [],
    comodo: null,
    atuadorAtual: null
  }

  componentDidMount() {
    api.get('/componentes')
    .then(response => {
      this.setState({ tipoAtuador: response.data.tipoAtuador });
    })
    .catch(function (error) {
      console.log(error);
    });
    
    api.get(`/atuador/${this.props.match.params.id}`)
    .then(response => {
      this.setState({ atuadorAtual: response.data.atuador });
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleSubmit = async ({ nome, tipoAtuador }, { resetForm }) => {
    console.log(tipoAtuador)
    try {
      const { data } = await api
        .post(`/atuador/edit/${this.state.atuadorAtual[0].id}`, {
          nome: nome,
          tipoAtuador: tipoAtuador,
        })
      resetForm()
      // this.props.history.push("/residencia/list");

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Container>
        <H1Styled>
          <h1>Editar atuador</h1>
        </H1Styled>
        <Formik
          initialValues={{
            nome: "",
            tipoAtuador: "1",
          }}
          onSubmit={this.handleSubmit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            errors,
            touched,
            handleSubmit,
          }) => (
              <Form onSubmit={handleSubmit}>

                <FormGroup>
                  <Input
                    name="nome"
                    placeholder="Nome"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nome}
                  />
                </FormGroup>
                <FormGroup>              
                <Select
                  name="tipoAtuador"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tipoAtuador}
                >
                  {this.state.tipoAtuador.map((opcao) => <option key={opcao.id} value={opcao.id}>{opcao.categoria}</option>) || <option>Selecione um atuador</option>}
                </Select>
                </FormGroup>

                <FormGroup>
                  <Button>Editar</Button>
                </FormGroup>
              </Form>
            )}
        </Formik>
      </Container>
    );
  }
}

export default Atuador;
