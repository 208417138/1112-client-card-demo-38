import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.scss';
import App_38 from './App_38';
import {DemoProvider_38} from './context/DemoContext_38'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DemoProvider_38>
      <App_38 />
    </DemoProvider_38>
  </React.StrictMode>
);
