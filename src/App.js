import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'antd/dist/reset.css';

import PublicLayout from './Layout/PublicLayout';
import NotFound from './Pages/NotFound';
import Login from './Pages/LoginSignUp/Login';
import { PUBLIC_ROUTER } from './Router/router';
import './App.css';
import SignUp from './Pages/LoginSignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        {PUBLIC_ROUTER.map(e =>
          <Route 
            key={e.key}
            path={e.path}
            element={<PublicLayout>{e.element}</PublicLayout>}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
