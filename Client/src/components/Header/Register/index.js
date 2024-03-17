import { AliwangwangOutlined, KeyOutlined, LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Form, Input } from "antd";
import { RegisterContainer } from "./styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [form] = Form.useForm()

    const [remember, setRemember] = useState(true)

    const handleCheckboxChange = (e) => {
        setRemember(e.target.checked)
        console.log(e.target.checked);
    };

    return (  
        <RegisterContainer>
            <Form form={form} layout="vertical" initialValues={{remember: true}}>
                <Form.Item
                    name="username"
                    label="Tên đăng nhập"
                    required
                    rules={[
                        {required: "true", message: "Hãy điền đầy đủ!"}
                    ]}
                >
                    <Input size="small" prefix={<UserOutlined />}/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Mật khẩu"
                    required
                    rules={[
                        {required: "true", message: "Hãy điền đầy đủ!"}
                    ]}
                >
                    <Input.Password size="small" prefix={<LockOutlined />}/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Xác nhận mật khẩu"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Hãy nhập lại mật khẩu!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('Mật khẩu nhập lại chưa đúng!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password size="small" prefix={<LockOutlined />}/>
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Email"
                    required
                    rules={[
                        {
                          type: 'email',
                          message: 'Email không hợp lệ!',
                        },
                        {
                          required: true,
                          message: 'Hãy nhập đầy đủ Email!',
                        },
                      ]}
                >
                    <Input size="small" prefix={<MailOutlined  />}/>
                </Form.Item>

                <Form.Item
                    name="nickname"
                    label="Tên hiển thị"
                    required
                    rules={[
                        {required: "true", message: "Hãy điền đầy đủ!"}
                    ]}
                >
                    <Input size="small" prefix={<AliwangwangOutlined />}/>
                </Form.Item>

                <Form.Item>
                    <Button style={{width: '100%'}} type="primary" danger htmlType="submit" className="login-form-button">
                        Đăng ký
                    </Button>
                </Form.Item>
            </Form>
        </RegisterContainer>
    );
}
 
export default Register;