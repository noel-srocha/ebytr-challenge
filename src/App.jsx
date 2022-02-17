/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import Header from './components/Header';
import { NewTaskModal } from './components/NewTaskModal';
import { TasksProvider } from './hooks/useTasks';
import { GlobalStyle } from './styles/global';

function App() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }

  return (
    <TasksProvider>
      <GlobalStyle />
      <Header onOpenNewTaskModal={handleOpenNewTaskModal} />
      <NewTaskModal
        newTaskModalStatus={isNewTaskModalOpen}
        onRequestClose={handleCloseNewTaskModal}
      />
      <Dashboard />
    </TasksProvider>
  );
}

export default App;
