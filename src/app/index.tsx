import {MainPage} from 'pages/privat/TasksBoardPage/MainPage';
import {AuthPage} from 'pages/auth/AuthPage/AuthPage';
import {Routes, Route} from 'react-router-dom'
import { Intro } from 'widgets/Intro/ui/Intro';
import { Login } from 'widgets/Login/ui/Login';
import { Registration } from 'widgets/Registration/ui/Registration';

import './index.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/auth' element={<AuthPage/>}>
        <Route index element={<Intro/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='registration' element={<Registration/>}/>
      </Route>
    </Routes>
  );
}

export default App;

