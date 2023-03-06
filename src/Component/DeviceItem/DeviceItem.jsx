import { Switch } from 'antd';
import { useNavigate } from 'react-router-dom';

import './DeviceItem.css';

export default function DeviceItem({ id, name, state }) {
  const navigate = useNavigate();

  const HandleViewDetail = () => {
    navigate(`/detail/${id}`);
  }

  const StopPropagation = (e) => {
    e.stopPropagation();
  }

  return(
    <div className="device-item" onClick={HandleViewDetail}>
      <div className='text-content'>
        <div className="device-item-text"><b>ID:</b> {id}</div>
        <div className='device-item-text'><b>Tên thiết bị:</b> {name}</div>
      </div>
      <div className="switch-button-box" onClick={StopPropagation}>
        <Switch 
          className='switch-button' 
          defaultChecked={state}
          checkedChildren='Bật'
          unCheckedChildren='Tắt'
        />
      </div>
    </div>
  )
}