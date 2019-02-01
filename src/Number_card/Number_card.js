import React, {Component} from 'react';
import {Layout, Icon, Row, Col, Card, Table, Divider, Tag} from 'antd';
import './Number_card.scss';

const {Content, Header} = Layout;
class Number_card extends Component {
    render() {
        return (
            <div>
                <div className="up_menu_header">
                    <Content className="custom_content">
                        {/*---card visrion 1---*/}
                        <card style={{margin: '30px'}}>
                            <Row>
                                <Col md={12} sm={24} lg={6} className="col-12">
                                    <div className="number-card-v1">
                                        <div className="icon_div">
                                            <Icon type="line-chart"/>
                                        </div>
                                        <div className="card-info">
                                            <span>profit</span>
                                        </div>
                                        <div className="icon_div">
                                            <p>45<sub>%</sub></p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} sm={24} lg={6} className="col-12">
                                    <div className="number-card-v1">
                                        <div className="icon_div">
                                            <p>45<sub>%</sub></p>
                                        </div>
                                        <div className="card-info">
                                            <span>New user</span>
                                        </div>
                                        <div className="icon_div">
                                            <Icon type="usergroup-add"/>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} sm={24} lg={6} className="col-12">
                                    <div className="number-card-v1">
                                        <div className="icon_div">
                                            <Icon type="line-chart"/>
                                        </div>
                                        <div className="card-info">
                                            <span>sales</span>
                                        </div>
                                        <div className="icon_div">
                                            <p>45<sub>%</sub></p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} sm={24} lg={6} className="col-12">
                                    <div className="number-card-v1">
                                        <div className="icon_div">
                                            <p>45<sub>%</sub></p>
                                        </div>
                                        <div className="card-info">
                                            <span>New user</span>
                                        </div>
                                        <div className="icon_div">
                                            <Icon type="usergroup-add"/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </card>
                        <hr className="divider"/>
                        {/*---card visrion 2---*/}
                        <card style={{margin: '50px'}}>
                            <Row>
                                <Col md={12} lg={6} sm={12} className="col-12">
                                    <div className="Icon_main">
                                        <div className="Icon_div">
                                            <Icon type="line-chart"/>
                                        </div>
                                        <div className="title_text">
                                            <p>16<span>%</span></p>
                                            <p>Growth</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} lg={6} sm={12} className="col-12">
                                    <div className="Icon_main">
                                        <div className="Icon_div">
                                            <Icon type="user"/>
                                        </div>
                                        <div className="title_text">
                                            <p>16<span>%</span></p>
                                            <p>User</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} lg={6} sm={12} className="col-12">
                                    <div className="Icon_main">
                                        <div className="Icon_div">
                                            <Icon type="credit-card"/>
                                        </div>
                                        <div className="title_text">
                                            <p>16<span>%</span></p>
                                            <p>Profile</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} lg={6} sm={12} className="col-12">
                                    <div className="Icon_main">
                                        <div className="Icon_div">
                                            <Icon type="shopping-cart"/>
                                        </div>
                                        <div className="title_text">
                                            <p>16<span>%</span></p>
                                            <p>Sales</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </card>
                        <hr className="divider"/>
                        {/*---card visrion 3---*/}
                        <div style={{margin: '30px 0'}}>
                            <Row>
                                <Col md={12} sm={24} lg={8} className="col-12">
                                    <div className="version-3-card">
                                        <div className="version-card-main">
                                            <span><Icon type="facebook" theme="filled" /></span>
                                        </div>
                                        <div className="version-card-body">
                                            <ul className="version-card-body-ul">
                                                <li>
                                                    <p>575</p>
                                                    <p>Followers</p>
                                                </li>
                                                <li><p>575</p>
                                                    <p>Followers</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} sm={24} lg={8} className="col-12">
                                    <div className="version-3-card">
                                        <div className="version-card2-main">
                                            <span><Icon type="twitter" /></span>
                                        </div>
                                        <div className="version-card-body">
                                            <ul className="version-card-body-ul">
                                                <li>
                                                    <p>141k</p>
                                                    <p>Followers</p>
                                                </li>
                                                <li><p>20</p>
                                                    <p>Following</p>
                                                </li>
                                                <li>
                                                    <p>223</p>
                                                    <p>Tweets</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} sm={24} lg={8} className="col-12">
                                    <div className="version-3-card">
                                        <div className="version-card3-main">
                                            <span><Icon type="instagram" theme="filled" /></span>
                                        </div>
                                        <div className="version-card-body">
                                            <ul className="version-card-body-ul">
                                                <li>
                                                    <p>309</p>
                                                    <p>Posts</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Content>
                </div>
            </div>
        );
    }
}

export default Number_card;