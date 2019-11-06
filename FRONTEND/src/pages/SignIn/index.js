import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';
import { Img } from './styles';
import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido!')
    .required('E-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória.')
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Container>
        <Img src={logo} alt="SRC" />

        <form schema={schema} onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Insira seu e-mail" />
          <input
            name="password"
            type="password"
            placeholder="Insira sua senha"
          />

          <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
          <Link to="/register">Criar conta gratuita</Link>
        </form>
      </Container>
    </>
  );
}
