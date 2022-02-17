/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useEffect, useState, useContext,
} from 'react';
import propTypes from 'prop-types';
import { api } from '../services/api';

const TasksContext = createContext({});

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api('tasks')
      .then((response) => setTasks(
        response.data.tasks.sort((a, b) => a.title.localeCompare(b.title)),
      ));
  }, []);

  async function createTask(taskInput) {
    const response = await api.post('/tasks', {
      ...taskInput,
      createdAt: new Date(),
    });
    const { task } = response.data;

    setTasks([...tasks, task].sort((a, b) => a.title.localeCompare(b.title)));
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);

  return (context);
}

TasksProvider.propTypes = {
  children: propTypes.node.isRequired,
};
