import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import 'normalize.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@material/react-dialog/dist/dialog.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
