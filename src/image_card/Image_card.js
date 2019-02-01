import React, {Component} from 'react';
import { Row,Col,Card } from 'antd';
import './image_card.scss';

const {Meta} = Card;

class img_card extends Component {
    render() {
        return (
            <div>
                <content className="custom_content">
                    {/*----image card-----*/}
                    <Row>
                        <div>
                            <p className="image_card_title">Image card</p>
                            <Col md={12} sm={24} lg={6} className="col-4 card_image">
                                <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col md={12} sm={24} lg={6} className="col-4 card_image">
                                <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col md={12} sm={24} lg={6} className="col-4 card_image">
                                <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col md={12} sm={24} lg={6} className="col-4 card_image">
                                <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                        </div>
                    </Row>
                </content>
            </div>
        );
    }
}
export default img_card;