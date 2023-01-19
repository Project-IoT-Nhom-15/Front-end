

import './Home.css'

function Home() {
  return(
    <div className="home">
      <div className='home-wrapper'>
        <div className='customer-info-box'>
          <div className="customer-name-box">
            <img src='./Image/logo.png' alt='' />
            <div className="customer-name">
              <h1>Hà Nhật Tuấn</h1>
              <p>Mã khách hàng: 06534134123</p>
            </div>
          </div>
          <div className='customer-info'>
            <p><b>Email: </b>abc@def.ghi</p>
            <p><b>Số điện thoại: </b>012 456 7890</p>
            <p><b>Số thiết bị sở hữu: </b> 12</p>
            <div className='customer-info-button'>
              <button className='add-device'>Thêm thiết bị</button>
              <button className='update-info'>Sửa thông tin</button>
            </div>
          </div>
        </div>
        <div className="device-list">
          <h1>Danh sách thiết bị</h1>
          <div className='grid-container'>
            <div className="device-item"></div>
            <div className="device-item"></div>
            <div className="device-item"></div>
            <div className="device-item"></div>
            <div className="device-item"></div>
            <div className="device-item"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home