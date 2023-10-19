import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "./context/socketContext";
import { UserProvider } from "./context/userContext";
import { Provider } from 'react-redux';
import naukriStore from './features/store'
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={naukriStore}>
      <UserProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </UserProvider>
    </Provider>
    </BrowserRouter>
      
  </React.StrictMode>
);
