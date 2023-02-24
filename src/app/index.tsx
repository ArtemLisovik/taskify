import { Routes, Route, Outlet } from 'react-router-dom'

import MainPage from 'pages/MainPage';
import LoginPage from 'pages/auth/LoginPage';
import RegisterPage from 'pages/auth/RegisterPage';
import { Intro } from 'widgets/Intro/ui/Intro';

import './index.scss';

const App = () => {
  return (
    <Routes>

      <Route path='/' element={<MainPage />} />

      <Route path='/auth' element={<Outlet />}>
        <Route index element={<Intro />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Route>

    </Routes>
  );
}

export default App;

