import React, {Component} from 'react';
import {Icon, Row, Col, Card, Divider} from 'antd';
import './Profile_card.scss';

class Profile_crad extends Component {
    render() {
        return (
            <div>
                <div className="form_card_main">
                    <Row>
                        <Col md={12} sm={24} lg={4} className="col-12 profile_card">
                            <Card className="profile_img_card">
                                <article>
                                    <div className="profile1-img">
                                        <img
                                            src="http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/avatars/1.jpg"
                                            alt=""/>
                                    </div>
                                    <div className="profile_caption">
                                        <p>Jason Bourne</p>
                                        <p>Engineer</p>
                                    </div>
                                </article>
                            </Card>
                        </Col>
                        <Col md={12} sm={24} lg={4} className="col-12 profile_card">
                            <Card className="profile_img_card">
                                <article>
                                    <div className="profile1-img">
                                        <img
                                            src="http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/avatars/2.jpg"
                                            alt=""/>
                                    </div>
                                    <div className="profile_caption">
                                        <p>Jason Bourne</p>
                                        <p>Engineer</p>
                                    </div>
                                </article>
                            </Card>
                        </Col>
                        <Col md={12} sm={24} lg={4} className="col-12 profile_card">
                            <Card className="profile_img_card">
                                <article>
                                    <div className="profile1-img">
                                        <img
                                            src="http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/avatars/3.jpg"
                                            alt=""/>
                                    </div>
                                    <div className="profile_caption">
                                        <p>Jason Bourne</p>
                                        <p>Engineer</p>
                                    </div>
                                </article>
                            </Card>
                        </Col>
                        <Col md={12} sm={24} lg={4} className="col-12 profile_card">
                            <Card className="profile_img_card">
                                <article>
                                    <div className="profile1-img">
                                        <img
                                            src="http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/avatars/4.jpg"
                                            alt=""/>
                                    </div>
                                    <div className="profile_caption">
                                        <p>Jason Bourne</p>
                                        <p>Engineer</p>
                                    </div>
                                </article>
                            </Card>
                        </Col>
                        <Col md={12} sm={24} lg={4} className="col-12 profile_card">
                            <Card className="profile_img_card">
                                <article>
                                    <div className="profile1-img">
                                        <img
                                            src="http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/avatars/1.jpg"
                                            alt=""/>
                                    </div>
                                    <div className="profile_caption">
                                        <p>Jason Bourne</p>
                                        <p>Engineer</p>
                                    </div>
                                </article>
                            </Card>
                        </Col>
                        <Col md={12} sm={24} lg={4} className="col-12 profile_card">
                            <Card className="profile_img_card">
                                <article>
                                    <div className="profile1-img">
                                        <img
                                            src="http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/avatars/4.jpg"
                                            alt=""/>
                                    </div>
                                    <div className="profile_caption">
                                        <p>Jason Bourne</p>
                                        <p>Engineer</p>
                                    </div>
                                </article>
                            </Card>
                        </Col>
                    </Row>
                    <Divider> Profile card version2</Divider>
                    <Row>
                        <Col md={12} sm={24} lg={6} className="col-12 profile_card">
                            <Card className="profile_img_card">
                                <article>
                                    <div className="profile1-img">
                                        <img
                                            src="http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/avatars/1.jpg"
                                            alt=""/>
                                    </div>
                                    <div className="profile_caption">
                                        <p><b>Jason Bourne</b></p>
                                        <p>Engineer</p>
                                    </div>
                                    <div className="caption">I must confess I'm American (I know… nobody's perfect)</div>
                                    <div>
                                        <a href="#" className="btn-social">
                                            <Icon type="twitter" />
                                        </a>
                                        <a href="#" className="btn-social">
                                            <Icon type="facebook" theme="filled" />
                                        </a>
                                        <a href="#" className="btn-social">
                                            <Icon type="instagram" theme="filled" />
                                        </a>
                                    </div>
                                </article>
                            </Card>
                        </Col>
                        <Col md={12} sm={24} lg={6} className="col-12 profile_card">
                            <Card className="profile_img_card">
                                <article>
                                    <div className="profile1-img">
                                        <img
                                            src="http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/avatars/2.jpg"
                                            alt=""/>
                                    </div>
                                    <div className="profile_caption">
                                        <p><b>Jason Bourne</b></p>
                                        <p>Engineer</p>
                                    </div>
                                    <div className="caption">Love hiking, sailing, music, dancing, sports.</div>
                                    <div>
                                        <a href="#" className="btn-social">
                                            <Icon type="twitter" />
                                        </a>
                                        <a href="#" className="btn-social">
                                            <Icon type="facebook" theme="filled" />
                                        </a>
                                        <a href="#" className="btn-social">
                                            <Icon type="instagram" theme="filled" />
                                        </a>
                                    </div>
                                </article>
                            </Card>
                        </Col>
                        <Col md={12} sm={24} lg={6} className="col-12 profile_card">
                            <Card className="profile_img_card">
                                <article>
                                    <div className="profile1-img">
                                        <img
                                            src="http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/avatars/3.jpg"
                                            alt=""/>
                                    </div>
                                    <div className="profile_caption">
                                        <p><b>Jason Bourne</b></p>
                                        <p>Engineer</p>
                                    </div>
                                    <div className="caption">I would walk through fire for a good coffee grinder.</div>
                                    <div>
                                        <a href="#" className="btn-social">
                                            <Icon type="twitter" />
                                        </a>
                                        <a href="#" className="btn-social">
                                            <Icon type="facebook" theme="filled" />
                                        </a>
                                        <a href="#" className="btn-social">
                                            <Icon type="instagram" theme="filled" />
                                        </a>
                                    </div>
                                </article>
                            </Card>
                        </Col>
                        <Col md={12} sm={24} lg={6} className="col-12 profile_card">
                            <Card className="profile_img_card">
                                <article>
                                    <div className="profile1-img">
                                        <img
                                            src="http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/avatars/4.jpg"
                                            alt=""/>
                                    </div>
                                    <div className="profile_caption">
                                        <p><b>Jason Bourne</b></p>
                                        <p>Engineer</p>
                                    </div>
                                    <div className="caption">I must confess I'm American (I know… nobody's perfect)</div>
                                    <div>
                                        <a href="#" className="btn-social">
                                            <Icon type="twitter" />
                                        </a>
                                        <a href="#" className="btn-social">
                                            <Icon type="facebook" theme="filled" />
                                        </a>
                                        <a href="#" className="btn-social">
                                            <Icon type="instagram" theme="filled" />
                                        </a>
                                    </div>
                                </article>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <p>hello profile card</p>
            </div>
        );
    }
}

export default Profile_crad;