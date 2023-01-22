import AddDevice from '../Pages/AddDevice/AddDevice'
import DeviceDetail from '../Pages/DeviceDetail/DeviceDetail'
import Home from '../Pages/Home/Home'
import UpdateInfo from '../Pages/UpdateInfo/UpdateInfo'

export const PUBLIC_ROUTER = [
  {
    key: "home",
    path: '/',
    element: <Home/>,
  },
  {
    key: "add-device",
    path: '/add-device',
    element: <AddDevice />,
  },
  {
    key: 'update-info',
    path: '/update-info',
    element: <UpdateInfo />,
  },
  {
    key: 'detail',
    path: '/detail',
    element: <DeviceDetail />
  }
]