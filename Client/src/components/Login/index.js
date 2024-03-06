// import { Button, Checkbox, Form, Input } from "antd";
// import { LoginContainer } from "./styled";

import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useState } from "react";

const Login = () => {
    const [profile, setProfile] = useState()

    return (  
        // <LoginContainer>
        //     <Form labelCol={{span: 4}} >
        //         <Form.Item label='User Name' name='User Name'>
        //             <Input/>    
        //         </Form.Item>
        //         <Form.Item label='Password' name='Password'> 
        //             <Input/>    
        //         </Form.Item>
        //         <Form.Item
        //             name="remember"
        //             valuePropName="checked"
        //             wrapperCol={{ offset: 4 }}
        //         >
        //             <Checkbox>Remember me</Checkbox>
        //             </Form.Item>

        //         <Form.Item
        //             wrapperCol={{ offset: 10 }}
        //         >
        //             <Button type="primary" htmlType="submit">
        //                 Log In
        //             </Button>
        //         </Form.Item>
        //     </Form>
        // </LoginContainer>
        <> 
            {
                !profile ? (<LoginSocialFacebook
                                appId="6376450752465557"
                                    onResolve={(response) => {
                                        console.log(response);
                                        setProfile(response.data)
                                    }}
                                    onReject={(error) => {
                                        console.log(error);
                                    }}
                                >
                                <FacebookLoginButton/>
                            </LoginSocialFacebook>) 
                    : ''
            }
            {
                profile ? <div>
                            <h1>Welcome</h1>
                        </div> 
                    : ''
            }
        </>
    );
}
 
export default Login;