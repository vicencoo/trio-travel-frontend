// import { createRoot } from 'react-dom/client';
// import './index.css';
// import { App } from './app/App';

// createRoot(document.getElementById('root')!).render(<App />);

import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./app/App";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
);
