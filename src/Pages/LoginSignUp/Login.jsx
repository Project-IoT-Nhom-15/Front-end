// import styled from "styled-components"
import { Input, Button, Form } from "antd";

import "./LoginSignUp.css";

function Login() {
  const [form] = Form.useForm();

  const handleLogin = () => {
    const { email, password } = form.getFieldValue();
    console.log(email, password);
  };

  return (
    <>
      <div className="space"></div>
      <div className="white-box-page">
        <div className="box-title">Đăng nhập</div>
        <p className="box-text">
          Hãy nhập email và mật khẩu để đăng nhập vào tài khoản của bạn
        </p>
        <Form form={form}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Cần nhập email!" }]}
          >
            <Input className="box-input" placeholder="Email" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Cần nhập mật khẩu!" }]}
          >
            <Input.Password
              className="box-input"
              placeholder="Mật khẩu"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button
              className="box-button"
              type="primary"
              onClick={handleLogin}
              htmlType="submit"
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
        <p className="box-text">
          Bạn chưa có tài khoản?&nbsp;
          <a style={{ textDecoration: "underline" }} href="/signup">
            Đăng kí ngay.
          </a>
        </p>
      </div>
    </>
  );
}

export default Login;
