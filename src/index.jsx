import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({
  models: {
    task: Model,
  },
  seeds(server) {
    server.db.loadData({
      tasks: [
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
      ],
    });
  },
  routes() {
    this.namespace = 'api';
    this.get('/tasks', () => this.schema.all('task'));
    this.post('/tasks', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('task', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
