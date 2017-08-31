import React from 'react';
import { Row, Col, Card, Icon} from 'antd';
// import { Link } from 'react-router';
import LineEcharts from '../../echarts/line';
import Breadcrumb from '../../breadcrumb';
import './index.scss';
class HomeIndex extends React.Component {
    state = { 
        loading: false,
        echartsData : {
            name:'会员增长',
            x:['05-01', '05-02','05-03', '05-04', '05-05', '05-06', '05-07'],
            y:['1200', '1400', '808', '811', '626', '488', '1600']
        },
        echartsData1 : {
            name:'订单增长',
            x:['2000', '2001','2002', '2003', '2004', '2005', '2006'],
            y:['10', '150', '808', '142', '626', '488', '1600']
        }
    }
    render() {
        return (
            <div className="page-index">
                <Breadcrumb />
                <Row gutter={12}>
                    <Col lg={6} md={12} style={{marginBottom:12}}>
                        <Card>
                            <Icon type="shopping-cart" />
                            <div className="content">
                                <p className="title">New Customers</p>
                                <p className="number">3,241</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={6} md={12} style={{marginBottom:12}}>
                        <Card>
                            <Icon type="pay-circle-o" />
                            <div className="content">
                                <p className="title">New Customers</p>
                                <p className="number">3,241</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={6} md={12} style={{marginBottom:12}}>
                        <Card>
                            <Icon type="team" />
                            <div className="content">
                                <p className="title">New Customers</p>
                                <p className="number">3,241</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={6} md={12} style={{marginBottom:12}}>
                        <Card>
                            <Icon type="pay-circle-o" />
                            <div className="content">
                                <p className="title">New Customers</p>
                                <p className="number">3,241</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={12} >
                    <Col>
                        <Card className="echarts" title="一周内订单增长趋势图">
                            <LineEcharts data={this.state.echartsData1} />  
                        </Card>
                    </Col>
                    <Col>
                       <Card className="echarts" title="一周内会员增长趋势图">
                            <LineEcharts data={this.state.echartsData} />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HomeIndex;