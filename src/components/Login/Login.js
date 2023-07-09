import React from 'react'
import { Button, Checkbox, Form, Input, message} from 'antd';
import './Login.css'
import { Link } from 'react-router-dom';
import loginimg from '../../assets/login.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const Login = () => {

  const onSubmitForm =()=>{
    //  return message.success('Logged in')
    toast.success('Logged in');

  }
  return (
    <>
   

    <div className='login'>

    <div className='loginimg'>
      <img  src={loginimg} />
    </div>
   
    <Form
    
    
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <h1>LOGIN</h1>
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button onClick={onSubmitForm} type="primary" htmlType="submit">
        <Link to='/main'>Submit</Link>
      </Button>
    </Form.Item>
  </Form>
    </div>
    <ToastContainer />

    </>
  );
};

export default Login