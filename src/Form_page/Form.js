import React, {Component} from 'react';
import './from.scss'
import {Divider, Col, Form, Input, Icon, Checkbox, Button, Card, Row,Cascader,Tooltip} from 'antd';

class Form_page extends Component {
    state = {
        collapsed: false,
    };
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <div>
                <div className="up_menu_header1">
                    <Row>
                        <Col span={12} md={12} offset={6} className="col-12">
                            <Card className="card_section">
                                <Col span={24} className="Login">
                                    <Form className="login-form">
                                        <p className="form_title">Create Account</p>
                                        <p>Get started with your free account</p>
                                        <div>
                                            <Button type="primary" value="large" block className="twitter_signin_button">
                                                <span>
                                                    <Icon type="twitter" />
                                                </span>Login via Twitter
                                            </Button>
                                            <Button type="primary" value="large" block className="facebook_signin_button">
                                                <span>
                                                    <Icon type="facebook" theme="filled" />
                                                </span>Login via Facebook
                                            </Button>
                                        </div>
                                        <Divider>OR</Divider>
                                        <Form.Item {...formItemLayout} label="Name">
                                            <Input addonBefore={(<span><Icon type="user" /></span>)} placeholder="Please input your name"/>
                                        </Form.Item>
                                        <Form.Item {...formItemLayout} label="E-mail">
                                            <Input addonBefore={(<span><Icon type="mail"/></span>)} placeholder="Please input E-mail"/>
                                        </Form.Item>
                                        <Form.Item label="Password" {...formItemLayout} >
                                            <Input type="password" addonBefore={(<span><Icon type="lock" /></span>)} placeholder="Please input password" />
                                        </Form.Item>
                                        <Form.Item label="Confirm Password" {...formItemLayout}>
                                            <Input type="password"  addonBefore={(<span><Icon type="lock" /></span>)} placeholder="Confirm password"/>
                                        </Form.Item>
                                        <Form.Item {...formItemLayout} label={( <span>Nickname&nbsp;<Tooltip title="What do you want others to call you?"><Icon type="question-circle-o" /></Tooltip></span>
                                        )}>
                                            <Input addonBefore={(<span><Icon type="user" /></span>)} placeholder="Please input nickname"/>
                                        </Form.Item>
                                        <Form.Item  {...formItemLayout} label="Phone Number">
                                            <Input addonBefore={(<span>+91</span>)} style={{ width: '100%' }} />
                                        </Form.Item>
                                        <Button type="primary" className=""> Create Account  </Button>
                                        <p>Have an account? <a href="">Log In</a> </p>
                                    </Form>
                                </Col>
                            </Card>
                        </Col>
                        <Divider>Log in page</Divider>
                        <Col span={12} md={12} offset={6} className="col-12">
                            <Card className="card_section">
                                <Col span={24} className="Login">
                                    <Form className="login-form">
                                        <p className="form_title">Login</p>
                                        <Form.Item className="form_item">
                                            <Input
                                                prefix={<Icon type="user"
                                                              style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                placeholder="Username"/>
                                        </Form.Item>
                                        <Form.Item className="form_item">
                                            <Input
                                                prefix={<Icon type="lock"
                                                              style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                type="password" placeholder="Password"/>
                                        </Form.Item>
                                        <Form.Item className="form_item">
                                            <Checkbox className="remember">Remember me</Checkbox>
                                            <Button type="primary" htmlType="submit"
                                                    className="login-form-button">
                                                Log in
                                            </Button>
                                        </Form.Item>
                                        <Form.Item className="form_item">
                                            <p className="register">Don't have an account yet?<a href="">register
                                                now!</a></p>
                                            <p className="forget_password">
                                                <span>Forgot your username or password?</span>
                                                <a className="login-form-forgot" href="">Forgot password</a>
                                            </p>
                                        </Form.Item>
                                    </Form>
                                </Col>
                            </Card>
                        </Col>
                        <Divider>Log in page v2</Divider>
                        <Col span={12} md={12} offset={6} className="col-12">
                            <Card className="card_section">
                                <Col span={24} className="Login">
                                    <Form className="login-form">
                                        <p className="form_title">Login</p>
                                        <div>
                                            <Button type="primary" value="large" block className="twitter_signin_button">
                                                <span>
                                                    <Icon type="twitter" />
                                                </span>Login via Twitter
                                            </Button>
                                            <Button type="primary" value="large" block className="facebook_signin_button">
                                                <span>
                                                    <Icon type="facebook" theme="filled" />
                                                </span>Login via Facebook
                                            </Button>
                                        </div>
                                        <Divider>OR</Divider>
                                        <Form.Item className="form_item">
                                            <Input
                                                prefix={<Icon type="user"
                                                              style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                placeholder="Username"/>
                                        </Form.Item>
                                        <Form.Item className="form_item">
                                            <Input
                                                prefix={<Icon type="lock"
                                                              style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                type="password" placeholder="Password"/>
                                        </Form.Item>
                                        <Form.Item className="form_item">
                                            <Checkbox className="remember">Remember me</Checkbox>
                                            <Button type="primary" htmlType="submit"
                                                    className="login-form-button">
                                                Log in
                                            </Button>
                                        </Form.Item>
                                        <Form.Item className="form_item">
                                            <p className="register">Don't have an account yet?<a href="">register
                                                now!</a></p>
                                            <p className="forget_password">
                                                <span>Forgot your username or password?</span>
                                                <a className="login-form-forgot" href="">Forgot password</a>
                                            </p>
                                        </Form.Item>
                                    </Form>
                                </Col>
                            </Card>
                        </Col>
                        <Divider>Subscribe Now form</Divider>
                        <Col span={12} md={12} offset={6} className="col-12">
                        <Card className="card_section">
                            <Col span={24} className="Login">
                                <Form className="login-form2">
                                    <p className="form_title_subscribe">Subscribe Now</p>
                                    <p>Only the best stuff. No spam! We promise!</p>
                                    <Form.Item>
                                        <Input
                                            prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                            placeholder="Email"/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" className="subscribe-button">Subscribe</Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Card>
                    </Col>
                        <Divider>Reset password</Divider>
                        <Col span={12} md={12} offset={6} className="col-12">
                            <Card className="card_section">
                                <Col span={24} className="Login">
                                    <Form className="login-form">
                                        <p className="form_title">Login</p>
                                        <p>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
                                        <Form.Item className="form_item">
                                            <Input
                                                prefix={<Icon type="user"
                                                              style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                placeholder="Username"/>
                                        </Form.Item>
                                        <Form.Item className="form_item">
                                            <Button type="primary" htmlType="submit" className="login-form-button">Send Reset Instructions</Button>
                                        </Form.Item>
                                    </Form>
                                </Col>
                            </Card>
                        </Col>
                        <Divider>Horizonatl From</Divider>
                        <Col span={12} md={12} offset={6} className="col-12">
                            <Card className="card_section">
                                <Col span={24} className="Login">
                                    <Form layout="inline" className="login-form">
                                        <p className="form_title">Login</p>
                                        <Form.Item className="form_item">
                                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
                                        </Form.Item>
                                        <Form.Item className="form_item">
                                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password" placeholder="Password"/>
                                        </Form.Item>
                                        <Form.Item className="form_item">
                                            <Button type="primary" htmlType="submit" className="login-form-button"><span>Log in</span></Button>
                                        </Form.Item>
                                    </Form>
                                </Col>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Form_page;
