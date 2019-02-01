import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon,} from 'antd';
import {Link} from 'react-router-dom';
import './Siebar.scss';

const {
    Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} className="sidebar_menu">
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" className="menu_item_header" as={Link} to='Dashboard'>
                        <Link to="/Dashboard">
                            <Icon type="user"/>
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" className="menu_item_header" as={Link} to='/Overview'>
                        <Link to="/Overview">
                            <Icon type="shopping-cart"/>
                            <span>Overview</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu className="menu_item_header" key="3" title={<span><Icon type="idcard"/><span>Card</span></span>}>
                        <Menu.Item key="3">
                            <Link to="/img_card">
                                <span>Image card</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/Form_card">
                                <span>Form Card</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/Number_cards">
                                <span>Number Cards</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/Profile_cards">
                                <span>Profile Cards</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu className="menu_item_header" key="4" title={<span><Icon type="form" /><span>Form</span></span>}>
                        <Menu.Item key="7">
                            <Link to="/form_page">
                                <span>Form Examples</span>
                            </Link>
                        </Menu.Item>
                       {/* <Menu.Item key="8">
                            <Link to="/Form_card">
                                <span>Steps / Wizard</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Link to="/Number_cards">
                                <span>Form Validation</span>
                            </Link>
                        </Menu.Item>*/}
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}
export default SiderDemo;