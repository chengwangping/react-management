//登陆
export const login = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/pages/login/login').default);
    }, 'login');
};
//首页
export const index = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/pages/index/index').default);
    }, 'index');
};
//订单列表
export const orderList = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/pages/order/list').default);
    }, 'list');
};
//订单详情
export const orderDetail = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/pages/order/detail').default);
    }, 'detail');
};