import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './Dashboard/index';
import Overview from './Overview/overview';
import form_card from './Form_card/Form_card';
import img_card from './image_card/Image_card';
import Number_card from './Number_card/Number_card'
import Profile_crad from './Profile_card/Profile_card';
import Form_page from './Form_page/Form';
import {Layout} from 'antd';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Router>
                        <Layout className="one_child">
                            <Sidebar/>
                            <Layout className="other_page">
                                <Route path="/Overview" component={Overview}/>
                                <Route path="/dashboard" component={Dashboard}/>
                                <Route path="/img_card" component={img_card}/>
                                <Route path="/Form_card" component={form_card}/>
                                <Route path="/Number_cards" component={Number_card}/>
                                <Route path="/Profile_cards" component={Profile_crad}/>
                                <Route path="/form_page" component={Form_page}/>
                            </Layout>
                        </Layout>
                    </Router>
                </Layout>
            </div>
        );
    }
}

export default App;
