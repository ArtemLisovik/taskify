import ReactDOM from 'react-dom/client';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import App from './app';
import { store } from './app/store/store'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './shared/config/firebase'
import { AnimatePresence } from 'framer-motion';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <BrowserRouter>
      <AnimatePresence>
        <Provider store={store}>
          <App />
        </Provider>
      </AnimatePresence>
    </BrowserRouter>
    <ToastContainer />
  </>

);