import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-loading-skeleton/dist/skeleton.css';
import {Provider} from "react-redux";
import {store} from "./Redux/configStore";
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
  <React.StrictMode>
			<Provider store={store}>
					<App/>
			</Provider>
		</React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
