import { Button, Form, Input } from "antd";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { ErrorText } from "./styled";

const Register = () => {
    const formik = useFormik ({
        initialValues: {
            email: '',
            username: '',
            phone: '',
            password: '',
            confirmPassword: ''
        },

        validationSchema: Yup.object({
            username: Yup.string().required('Need to input that field !').min(5, "Must be long than 5 chacracters !"),
            email: Yup.string().required("Need to input that field !").matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter email again. Email not valid !"),
            phone: Yup.number(),
            password: Yup.string().required("Need to input that field !").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,10}$/, "Password need 1 character, 1 special character, 1 number and 1 uppercase character"),
            confirmPassword: Yup.string().required("Need to input that field").oneOf([Yup.ref("password"), null], "Password not match !")
        }),

        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (  
        <>
            <Form labelCol={{span: 8}} onFinish={formik.handleSubmit}>
                <Form.Item label='Your email'>
                    <Input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>    
                    {formik.errors.email && (
                        <ErrorText> {formik.errors.email} </ErrorText>
                    )}
                </Form.Item>
                <Form.Item label='User name'> 
                    <Input type="text" name='username' id="username" value={formik.values.username} onChange={formik.handleChange}/>   
                    {formik.errors.username && (
                        <ErrorText> {formik.errors.username} </ErrorText>
                    )} 
                </Form.Item>
                <Form.Item label='Your phone number'> 
                    <Input type="phone" name='phone' id="phone" value={formik.values.phone} onChange={formik.handleChange}/>   
                    {formik.errors.phone && (
                        <ErrorText> {formik.errors.phone} </ErrorText>
                    )} 
                </Form.Item>
                <Form.Item label='Password'> 
                    <Input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange}/>    
                    {formik.errors.password && (
                        <ErrorText> {formik.errors.password} </ErrorText>
                    )}
                </Form.Item>
                <Form.Item label='Confirm Password'> 
                    <Input type="password" name='confirmPassword' id="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange}/>    
                    {formik.errors.confirmPassword && (
                        <ErrorText> {formik.errors.confirmPassword} </ErrorText>
                    )}
                </Form.Item>

                <Form.Item
                    wrapperCol={{ offset: 10 }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}
 
export default Register;