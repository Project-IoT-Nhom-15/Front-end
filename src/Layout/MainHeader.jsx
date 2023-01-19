import { Form, Input, Select } from 'antd';

import './Layout.css';
import Menu from '../Component/Menu/Menu';

// const { Option } = Select;

function MainHeader() {
  return (
    <div className='main-header component-layout'>
      <div className='main-header-wrapper component-wrapper'>
        <a href='./'>
          <img src='./Image/logo.png' alt='' />
        </a>
        <div className='search-box'>
          {/* <Select
            size='large'
            defaultValue={1}
            className='search-option'
          >
            <Option value={1}>Tất cả</Option>
            <Option value={2}>Tên sách</Option>
            <Option value={3}>Tác giả</Option>
          </Select> */}
          <Form.Item className='form-item'>
            <Input.Search placeholder='Tìm kiếm' size='large' enterButton />
          </Form.Item>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default MainHeader;