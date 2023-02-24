import MainPage from 'pages/MainPage';
import LoginPage from 'pages/LoginPage';
import {Routes, Route} from 'react-router-dom'

import './index.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>


  );
}

export default App;
