
import React, { Component } from 'react';
import { Layout } from 'antd';
import Sider from './components/menu/sider';
import Header from './components/header/header';
import { receiveData } from './action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style/base.scss';
const { Content, Footer } = Layout;



class App extends Component {
    state = {
        collapsed: false,
    };
    componentWillMount() {
        const { receiveData } = this.props;
        const user = JSON.parse(localStorage.getItem('user'));
        user && receiveData(user, 'auth');
        // receiveData({a: 213}, 'auth');
        // fetchData({funcName: 'admin', stateName: 'auth'});
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const { auth, router } = this.props;
        return (
            <Layout className="ant-layout-has-sider" style={{height:'100%'}}>
              <Sider path={this.props.location.pathname} collapsed={this.state.collapsed} />
              <Layout>
                <Header toggle={this.toggle} user={auth.data || {}} router={router} />
                <Content className="page-view">
                  {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                  React-Admin ©2017 Created
                </Footer>
              </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    const { auth = {data: {}} } = state.httpData;
    return {auth};
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
