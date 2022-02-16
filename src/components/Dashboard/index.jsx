import React from 'react';
import { Container } from './styles';
import { TasksTable } from '../TasksTable';

export function Dashboard() {
  return (
    <Container>
      <TasksTable />
    </Container>
  );
}
