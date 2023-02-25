import {MainPage} from 'pages/privat/TasksBoardPage/MainPage';
import {IntroPage} from 'pages/auth/IntroPage/IntroPage';
import {Routes, Route} from 'react-router-dom'
import { Intro } from 'widgets/Intro/ui/Intro';
import { Login } from 'widgets/Login/ui/Login';
import { Registration } from 'widgets/Registration/ui/Registration';

import './index.scss';
import { AuthGuard } from 'shared/helpers/authGuard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AuthGuard><MainPage/></AuthGuard>}/>
      <Route path='/auth' element={<IntroPage/>}>
        <Route index element={<Intro/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='registration' element={<Registration/>}/>
      </Route>
    </Routes>
  );
}

export default App;

