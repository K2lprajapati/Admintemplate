import React, {Component} from 'react';
import { Layout,  Icon, Row, Col } from 'antd';
import './dashboard.scss';

const { Content,Header } = Layout;

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Content>
                    <div className="up_menu_header">
                        <Content className="custom_content">
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
                            <card>
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
                        </Content>
                    </div>
                </Content>
            </div>
        );
    }
}

export default Dashboard;
