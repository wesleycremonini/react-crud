import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from "react-router-dom";

//context
import { AuthProvider } from "./contexts/AuthContext";
import { DBProvider } from "./contexts/DBContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DBProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </DBProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);