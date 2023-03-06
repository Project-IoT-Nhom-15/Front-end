import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';
import DeviceItem from '../../Component/DeviceItem/DeviceItem';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) 
      navigate('/login');
  })

  return(
    <div className="device-list page-component">
      <h1 className='component-title'>Danh sách thiết bị</h1>
      <div className='grid-container'>
        <DeviceItem 
          id='324795dfsafbfds21341234'
          name='Đây là 1 thiết bị đặt ở phòng bếp của nhà tôi abcdnsdsmewrrewrewqrusidfaiusd'
          state={true}
        />
        <DeviceItem 
          id='324795dfsafbfds21341234'
          name='Đây là 1 thiết bị đặt ở phòng bếp của nhà tôi abcdnsdsmewrrewrewqrusidfaiusd'
          state={true}
        />
        <DeviceItem 
          id='324795dfsafbfds21341234'
          name='Đây là 1 thiết bị đặt ở phòng bếp của nhà tôi abcdnsdsmewrrewrewqrusidfaiusd'
          state={true}
        />
        <DeviceItem 
          id='324795dfsafbfds21341234'
          name='Đây là 1 thiết bị đặt ở phòng bếp của nhà tôi abcdnsdsmewrrewrewqrusidfaiusd'
          state={true}
        />
        <DeviceItem 
          id='324795dfsafbfds21341234'
          name='Đây là 1 thiết bị đặt ở phòng bếp của nhà tôi abcdnsdsmewrrewrewqrusidfaiusd'
          state={true}
        />
        <DeviceItem 
          id='324795dfsafbfds21341234'
          name='Đây là 1 thiết bị đặt ở phòng bếp của nhà tôi abcdnsdsmewrrewrewqrusidfaiusd'
          state={true}
        />
      </div>
    </div>
  )
}

export default Home