import React from 'react';
import { Row, Col, Card } from 'antd';
import Breadcrumb from '../../breadcrumb';
class OrderList extends React.Component {
    render() {
        let data = {
            first:{
                name:"订单列表"
            }
        }
        return (
            <div className="page-order">
                <Breadcrumb data={data} />
                <Row gutter={12} >
                    <Col>
                        <Card className="echarts" title="一周内订单增长趋势图">
                            <div>
                                这里是订单列表
                            </div>
                        </Card>
                    </Col> 
                </Row>
            </div>
        )
    }
}

export default OrderList;