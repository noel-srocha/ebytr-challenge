import React from 'react';
import propTypes from 'prop-types';
import { Container, Content } from './styles';
import logo from '../../assets/logo.png';

export default function Header({ onOpenNewTaskModal }) {
  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="Logomarca" />
          <h1>TaskNinja</h1>
        </div>
        <button
          type="button"
          onClick={onOpenNewTaskModal}
        >
          Nova Tarefa
        </button>
      </Content>
    </Container>
  );
}

Header.propTypes = {
  onOpenNewTaskModal: propTypes.func.isRequired,
};
