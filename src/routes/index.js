import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App from '../app';
import * as pageRouter from './router';
export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { store } = this.props;
        const { auth } = store.getState().httpData;
        if (!auth || !auth.data.permissions.includes(permission)) window.location.hash = '/404';
        return component;
    };
    render() {
        return (
            <Router history={hashHistory}>
                <Route path={'/'} >
                    <IndexRedirect to="/index" />
                    <Route path={'/'} component={App}>
                        <Route>
                            <Route path={'index'} getComponent={pageRouter.index} />
                        </Route>
                        <Route path={'order'}>
                            <Route path={'list'} getComponent={pageRouter.orderList} />
                            <Route path={'detail'} getComponent={pageRouter.orderDetail} />
                        </Route>
                    </Route>
                    <Route path={'login'} getComponent={pageRouter.login} />
                </Route>
            </Router>
        )
    }
}