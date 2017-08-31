import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router';
class BreadcrumbCur extends React.Component {
    render() {
        let first,second = '';
        let data = this.props.data;
        if(data){
            if(data.first.url){
                first =
                <Breadcrumb.Item>
                    <Link to={data.first.url}>{data.first.name}</Link>
                </Breadcrumb.Item>;
            }else {
                first =
                <Breadcrumb.Item>
                    {data.first.name}
                </Breadcrumb.Item>;
            };
            if(data.second){
                second = <Breadcrumb.Item>
                    {data.second.name}
                </Breadcrumb.Item>;
            }
        };

        return (
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to={'/index'}>首页</Link>
                </Breadcrumb.Item>
                {first}
                {second}
            </Breadcrumb>
        )
    }
}

export default BreadcrumbCur;