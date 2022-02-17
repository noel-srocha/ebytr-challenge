import React, { useState } from 'react';
import { useTasks } from '../../hooks/useTasks';
import { Container } from './styles';

export function TasksTable() {
  const { tasks } = useTasks();
  const [status, setStatus] = useState('pending');

  function handleChangeTaskStatus({ target }) {
    if (target.value === 'Em Andamento') setStatus('in-progress');
    else if (target.value === 'Concluído') setStatus('complete');
    else setStatus('pending');
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Status</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(({
            id, title, category, createdAt,
          }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>
                <select
                  name="task-status"
                  className={status}
                  onChange={handleChangeTaskStatus}
                >
                  <option value="pending">Pendente</option>
                  <option value="in progress">Em Andamento</option>
                  <option value="completed">Concluída</option>
                </select>
              </td>
              <td>{category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
