import React, { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TasksTable() {
  useEffect(() => {
    api('tasks')
      .then((response) => console.log(response.data));
  }, []);

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
          <tr>
            <td>Estudar sobre Styled Components</td>
            <td>
              <select name="task-status" id="task-status">
                <option value="pending">Pendente</option>
                <option value="in progress">Em Andamento</option>
                <option value="completed">Concluída</option>
              </select>
            </td>
            <td>Desenvolvimento</td>
            <td>14/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
