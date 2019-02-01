import React, {Component} from 'react';
import './from.scss'
import {Divider, Col, Form, Input, Icon, Checkbox, Button, Card, Row} from 'antd';

class Form_page extends Component {
    state = {
        collapsed: false,
    };

    render() {
        return (
            <div>
                <div className="up_menu_header1">
                    <Row>
                        <Col span={12} md={10} offset={7} className="col-12">
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
                    </Row>
                    <Divider>Subscribe Now form</Divider>
                    <Col span={12} md={10} offset={7} className="col-12">
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
                </div>
            </div>
        );
    }
}

export default Form_page;