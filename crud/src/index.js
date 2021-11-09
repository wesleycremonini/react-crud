import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

//context
import { AuthProvider } from "./contexts/AuthContext";
import { DBProvider } from "./contexts/DBContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DBProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </DBProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);