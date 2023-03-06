import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './DeviceDetail.css';

export default function DeviceDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    if (!localStorage.getItem('accessToken'))
      navigate('/login');
  });

  return (
    <div className="device-detail page-component">
      <h1 className='component-title'>Chi tiết thiết bị</h1>
      <div>
      <div className='text-content id-content'>
        <b>Mã thiết bị:</b> {id}
      </div>
      <div className='text-content'>
        <b>Tên thiết bị:</b> abcdef
      </div>
      </div>
    </div>
  )
}