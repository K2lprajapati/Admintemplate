import React, {Component} from 'react';
import { Row,Col,Card,Form,Input,Icon,Checkbox,Button } from 'antd';
import './Form_card.scss';

class form_card extends Component {
    render() {
        return (
            <div className="form_card_main">
                <Row>
                    <div>
                        <Col span={12} md={12} className="col-12">
                            <Card className="card_section">
                                <Col span={12}>
                                    <img alt="example"
                                         src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                         width="100%"/>
                                </Col>
                                <Col span={12} className="Login">
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
                        <Col span={12} md={12} className="col-12">
                            <Card className="card_section">
                                <Col span={12}>
                                    <img alt="example"
                                         src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                         width="100%"/>
                                </Col>
                                <Col span={12} className="Login">
                                    <Form className="login-form2">
                                        <p className="form_title_subscribe">Subscribe Now</p>
                                        <p>Only the best stuff. No spam! We promise!</p>
                                        <Form.Item>
                                            <Input
                                                prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Email"/>
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary" className="subscribe-button">Subscribe</Button>
                                        </Form.Item>
                                    </Form>
                                </Col>
                            </Card>
                        </Col>
                    </div>
                    <Col span={12} md={12} className="col-12">
                        <Card className="card_section">
                            <Col span={12}>
                                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width="100%"/>
                            </Col>
                            <Col span={12} md={12} sm={12} lg={12} className="Login">
                                <Form className="login-form2">
                                    <p className="form_title_subscribe">Forget password</p>
                                    <p>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
                                    <Form.Item>
                                        <Input
                                            prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Email"/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" className="subscribe-button">Send Reset
                                            Instructions</Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Card>
                    </Col>
                   {/* <Col span={12} md={12} className="col-12">
                        <Card className="card_section" style={{marginTop: "10px"}}>
                            <Col span={12}>
                                <img alt="example"
                                     src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                     width="100%"/>
                            </Col>
                            <Col span={12} className="Login">
                                <Form className="login-form2">
                                    <p className="form_title_subscribe">Subscribe Now</p>
                                    <p>Only the best stuff. No spam! We promise!</p>
                                    <Form.Item>
                                        <Input
                                            prefix={<Icon type="mail"
                                                          style={{color: 'rgba(0,0,0,.25)'}}/>}
                                            placeholder="Email"/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary"
                                                className="subscribe-button">Subscribe</Button>
                                    </Form.Item>
                                    <Form.Itam>
                                        <Button type="primary" htmlType="submit"
                                                className="login-form-button">
                                            Log in
                                        </Button>
                                    </Form.Itam>
                                </Form>
                            </Col>
                        </Card>
                    </Col>*/}
                </Row>
            </div>
        );
    }
}
export default form_card;
