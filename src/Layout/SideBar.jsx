import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getRequest } from "../hooks/api";

export default function SideBar() {
  const [ customerInfo, setCustomerInfo ] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    GetCustomerInfo();
  }, []);

  const GetCustomerInfo = async () => {
    const data = await getRequest('/user');
    setCustomerInfo(await data);
    localStorage.setItem('name', await data.name);
    localStorage.setItem('email', await data.email);
    localStorage.setItem('phone', await data.phone);
  }

  const Logout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  }

  return(
    <div className='customer-info-box'>
      <div className="customer-name-box">
        <img src='./Image/logo.png' alt='' />
        <div className="customer-name">
          <h1>{customerInfo.name}</h1>
          <p>ID: {customerInfo._id}</p>
        </div>
      </div>
      <div className='customer-info'>
        <p><b>Email: </b>{customerInfo.email}</p>
        <p><b>Số điện thoại: </b>{customerInfo.phone}</p>
        <p><b>Số thiết bị sở hữu: </b>{customerInfo.count}</p>
        <div className='customer-info-button'>
          {/* <a href='/add-device' className='add-device'>Thêm thiết bị</a> */}
          <a href='/update-info' className='update-info'>Sửa thông tin</a>
          <button onClick={Logout}>Đăng xuất</button>
        </div>
      </div>
    </div>
  )
}