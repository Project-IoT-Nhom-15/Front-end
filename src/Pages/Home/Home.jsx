import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';
import DeviceItem from '../../Component/DeviceItem/DeviceItem';
import { getRequest } from '../../hooks/api';

function Home() {
  const navigate = useNavigate();
  const [ allSystems, setAllSystems ] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/login');
    }
    else {
      GetAllSystems();
    }
  }, [navigate]);

  const GetAllSystems = async () => {
    const data = await getRequest('/systems');
    setAllSystems(await data);
    console.log(await data);
  }

  return(
    <div className="device-list page-component">
      <h1 className='component-title'>Danh sách thiết bị</h1>
      <div className='grid-container'>
        {allSystems.map((e, index) => 
          <DeviceItem
            key={index}
            id={e._id}
            name={e.name}
            state={e.state}
          />
        )}
      </div>
    </div>
  )
}

export default Home