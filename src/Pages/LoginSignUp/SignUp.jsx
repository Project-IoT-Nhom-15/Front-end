// import styled from "styled-components"
import { Button, Form, Input, Select } from "antd";

import "./LoginSignUp.css";

const { Option } = Select;

function SignUp() {
  const [form] = Form.useForm();

  const handleSignUp = (value) => {
    console.log({
      email: value.email,
      password: value.password,
      gender: value.gender,
    });
  };

  return (
    <>
      <div className="space"></div>
      <div className="white-box-page">
        <div className="box-title">Đăng kí</div>
        <p className="box-text">
          Hãy điền đầy đủ thông tin để đăng ký tài khoản
        </p>
        <Form form={form} onFinish={(value) => handleSignUp(value)}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Cần nhập email!" },
              { type: "email", message: "Sai định dạng email" },
            ]}
          >
            <Input className="box-input" placeholder="Email" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Cần nhập mật khẩu!" },
              { min: 8, message: "Mật khẩu cần ít nhất 8 kí tự" },
              {
                pattern: new RegExp(/^[a-zA-Z0-9]*$/),
                message: "Mật khẩu không chứa kí tự đặc biệt và dấu cách",
              },
            ]}
          >
            <Input.Password
              className="box-input"
              placeholder="Mật khẩu"
              size="large"
              style={{ zIndex: 1 }}
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Cần xác nhận lại mật khẩu!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  } else return Promise.reject("Mật khẩu xác nhận không khớp");
                },
              }),
            ]}
          >
            <Input.Password
              className="box-input"
              placeholder="Xác nhận mật khẩu"
              size="large"
            />
            {/* <p style={{margin: '0'}}>Abc</p> */}
          </Form.Item>
          <Form.Item
            name="gender"
            rules={[{ required: true, message: "Cần chọn giới tính!" }]}
          >
            <Select
              size="large"
              placeholder="Giới tính"
              style={{ width: "max-content" }}
            >
              <Option value={1}>Nam</Option>
              <Option value={2}>Nữ</Option>
              <Option value={3}>Khác</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              className="box-button"
              type="primary"
              // onClick={handleSignUp}
              htmlType="submit"
            >
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default SignUp;
