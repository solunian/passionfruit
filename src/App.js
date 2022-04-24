import React from 'react';
import { useRoutes } from 'hookrouter';

import routes from './routes';
import { NotFoundPage } from './generalUI';


export default function App() {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
}