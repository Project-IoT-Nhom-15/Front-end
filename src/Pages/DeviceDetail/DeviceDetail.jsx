// css cho component này tại file DeviceDetail.css
// Các element thêm vào trong thẻ div.device-detail
import './DeviceDetail.css';
import { Table} from 'antd';

export default function DeviceDetail() {
  const columns = [
    {
      title: 'Nhiệt độ',
      dataIndex: 'temperature',
      key: 'temperature',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Độ ẩm',
      dataIndex: 'humidity',
      key: 'humidity',
    },
    {
      title: 'Nồng độ khí ga',
      key: 'gas',
      dataIndex: 'gas',
    },
  ];

  return (
    <div className="device-detail page-component">
      <h1 className='component-title'>Chi tiết thiết bị</h1>
      <div className="box-member">
          <div className="label">Tên thiết bị: </div>
          <p id="name" className="label input-box">Thiết bị nhà tắm </p>
      </div>
      <div className="box-member">
          <div className="label">Mã thiết bị: </div>
          <p type='number' id="phone" className="label input-box">A123456789</p>
      </div>
      <div className="box-member">
          <div className="label">Vị trí thiết bị: </div>
          <p id="email" className="input-box label">{new Date().toLocaleString()}</p>
      </div>
      <div className="box-member gender">
          <div className="label">Trạng thái: </div>
          <p type='number' id="phone" className="label input-box">An toàn</p>
      </div>
      <div className="box-member">
          <div className="label">Các thông số: </div>
          <div id="name" className="label input-box">
          <Table
              columns={columns}
              rowKey="index"
              pagination={{
                style: {
                  display: 'flex',
                  flexDirection: 'row',
                },
              }}
                />
          </div>
      </div>
      <div className="box-member">
          <div className="label">Biếu đồ thông số: </div>
      </div>
    </div>
  )
}