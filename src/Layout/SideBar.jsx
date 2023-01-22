export default function SideBar() {
  return(
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
          <a href='/add-device' className='add-device'>Thêm thiết bị</a>
          <a href='/update-info' className='update-info'>Sửa thông tin</a>
        </div>
      </div>
    </div>
  )
}