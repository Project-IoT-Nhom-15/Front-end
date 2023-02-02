import { Button, Form, Input } from "antd";

import "./LoginSignUp.css";

function ChangePassword() {
  const [form] = Form.useForm();
  const handleChangePassword = (value) => {
    console.log({
      oldPassword: value.oldPassword,
      newPassword: value.newPassword,
      confirmPassword: value.confirmPassword
    });
  };

  return (
    <>
      <div className="space"></div>
      <div className="white-box-page">
        <div className="box-title">Đổi mật khẩu</div>
        <p className="box-text">Hãy điền đầy đủ thông tin để đổi mật khẩu</p>
        <Form form={form} onFinish={(value) => handleChangePassword(value)}>
          <Form.Item
            name="oldPassword"
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
              placeholder="Mật khẩu cũ"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="newPassword"
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
              placeholder="Mật khẩu mới"
              size="large"
              style={{ zIndex: 1 }}
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={["newPassword"]}
            rules={[
              { required: true, message: "Cần xác nhận lại mật khẩu!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  } else return Promise.reject("Mật khẩu xác nhận không khớp");
                },
              }),
            ]}
          >
            <Input.Password
              className="box-input"
              placeholder="Xác nhận mật khẩu mới"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button className="box-button" htmlType="submit" type="primary">
              Xác nhận
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default ChangePassword;
