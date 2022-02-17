/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import Modal from 'react-modal';
import { useTasks } from '../../hooks/useTasks';
import { Container } from './styles';
import closeImg from '../../assets/close.svg';

Modal.setAppElement('#root');

export function NewTaskModal({ newTaskModalStatus, onRequestClose }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const { createTask } = useTasks();

  async function handleCreateNewTask(event) {
    event.preventDefault();

    await createTask({
      title,
      category,
      status: 'pending',
    });

    setTitle('');
    setCategory('');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={newTaskModalStatus}
      onRequestClose={onRequestClose}
      contentLabel="New Transaction Modal"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTask}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={({ target }) => { setTitle(target.value); }}
        />
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={({ target }) => { setCategory(target.value); }}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

NewTaskModal.propTypes = {
  newTaskModalStatus: propTypes.bool.isRequired,
  onRequestClose: propTypes.func.isRequired,
};
