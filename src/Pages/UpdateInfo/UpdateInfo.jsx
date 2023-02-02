// css cho component này tại file UpdateInfo.css
// Các element thêm vào trong thẻ div.update-info
import './UpdateInfo.css';
import { Button, Form, Input, Select } from 'antd';

const { Option } = Select;

export default function UpdateInfo() {
  const [ form ] = Form.useForm();

  const handleChange = (value) => {
    console.log({
      name: value.customerName,
      email: value.email,
      phoneNumber: value.phoneNumber,
      gender: value.gender
    })
  }

  return (
    <div className="update-info page-component">
      <h1 className="component-title">Chỉnh sửa thông tin</h1>
      <Form
        className="form-change-info"
        form={form}
        onFinish={(value) => handleChange(value)}
      >
        <h2>Tên khách hàng</h2>
        <Form.Item name="customerName" initialValue="abc">
          <Input className="box-input" size="large" />
        </Form.Item>
        <h2>Email</h2>
        <Form.Item
          name="email"
          initialValue="abc"
          rules={[
            { required: true, message: "Cần nhập email!" },
            { type: "email", message: "Sai định dạng email" },
          ]}
        >
          <Input className="box-input" size="large" />
        </Form.Item>
        <h2>Số điện thoại</h2>
        <Form.Item name="phoneNumber" initialValue="abc">
          <Input className="box-input" size="large" />
        </Form.Item>
        <div className='form-gender'>
          <h2>Giới tính</h2>
          <Form.Item name="gender">
            <Select
              className='form-select'
              size="large"
              placeholder="Nam"
            >
              <Option value={1}>Nam</Option>
              <Option value={2}>Nữ</Option>
              <Option value={3}>Khác</Option>
            </Select>
          </Form.Item>
        </div>
        <Button 
          className='box-button'
          htmlType='submit'
        >
          Xác nhận
        </Button>
      </Form>
      <p className='change-password'>
        Bạn muốn đổi mật khẩu?&nbsp;
        <a href='/change-password'>Đổi mật khẩu</a>
      </p>
    </div>
  );
}