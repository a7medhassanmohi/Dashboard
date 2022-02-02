import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import "./i18n"
import './index.css';
const App = lazy(() => import('./App'))


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<p>loading</p>}>
      <App />

    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

