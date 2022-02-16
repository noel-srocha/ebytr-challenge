import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import App from './App';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/tasks', () => [
      {
        id: 1,
        title: 'Estudar Styled Components',
        status: 'pending',
        category: 'Desenvolvimento',
        createdAt: new Date('2022-02-15'),
      },
      {
        id: 2,
        title: 'Estudar sobre MirageJS',
        status: 'pending',
        category: 'Desenvolvimento',
        createdAt: new Date('2022-02-16'),
      },
    ]);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
