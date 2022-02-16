import React from 'react';
import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logomarca" />
        <button
          type="button"
        >
          Nova Tarefa
        </button>
      </Content>
    </Container>
  );
}
