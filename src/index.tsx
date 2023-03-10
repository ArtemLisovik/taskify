import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './config/firebase'

import './index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
    </BrowserRouter>
    <ToastContainer />
  </>

);