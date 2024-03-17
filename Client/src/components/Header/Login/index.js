import { KeyOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Form, Input } from "antd";
import { LoginContainer } from "./styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [form] = Form.useForm()

    const [remember, setRemember] = useState(true)

    const handleCheckboxChange = (e) => {
        setRemember(e.target.checked)
    };

    return (  
        <LoginContainer>
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

                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox style={{ marginRight: '8px' }} defaultChecked={remember} onChange={handleCheckboxChange}/> <span>Ghi nhớ</span>
                    </Form.Item>

                    <Link to={'/quen-mat-khau'} className="ml-80">
                        Quên mật khẩu
                    </Link>
                </Form.Item>

                <Form.Item>
                    <Button style={{width: '100%'}} type="primary" htmlType="submit" className="login-form-button">
                        Đăng nhập
                    </Button>
                    <Divider className="mt-10 mb-10"/>
                    <Button style={{width: '100%'}} type="primary" danger htmlType="submit" className="login-form-button">
                        Đăng nhập bằng Google
                    </Button>
                </Form.Item>
            </Form>
        </LoginContainer>
    );
}
 
export default Login;