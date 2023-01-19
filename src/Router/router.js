import Home from '../Pages/Home/Home'
import SignUp from '../Pages/LoginSignUp/SignUp'
import Login from '../Pages/LoginSignUp/Login'

export const PUBLIC_ROUTER = [
  {
    key: "home",
    path: '/',
    element: <Home/>,
  },
  {
    key: 'signUp',
    path: '/signup',
    element: <SignUp/>,
  },
  {
    key: 'login',
    path: '/login',
    element: <Login />,
  }
]