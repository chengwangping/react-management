import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

class LineEcharts extends React.Component {
    state = {
        option : {
            title: {
                show: false
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#ddd',
                        width:1
                    }
                },
                backgroundColor: 'rgba(255,255,255,1)',
                padding: [5, 10],
                textStyle: {
                    color: '#7588E4',
                },
                extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
            },
            toolbox: {
                show : false
            },
            legend: {
                right: 20,
                orient: 'vertical',
            },
            grid:{
                x:'20',
                y:'20',
                width:'100%',
                hoverable: true,
                clickable: false,
                borderWidth: 0,
                color: '#ccc'
            },
            calculable : true,
            xAxis: {
                type: 'category',
                data:[],
                boundaryGap: false,
                silent:false,
                splitLine: {
                    show: false,
                    interval: 'auto',
                    lineStyle: {
                        color: ['#D4DFF5']
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#609ee9'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 10
                    }
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: ['#D4DFF5']
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#609ee9'
                    }
                },
                axisLabel: {
                    interval:1,
                    margin: 0,
                    textStyle: {
                        fontSize: 8
                    }
                }
            },
            series: [{
                name:'',
                type: 'line',
                smooth: true,
                showSymbol: false,
                //symbol: 'circle',
                symbolSize: 6,
                data:[],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(216, 244, 247,0.5)'
                        }, {
                            offset: 0,
                            color: 'rgba(216, 244, 247,0.5)'
                        }], false)
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#58c8da'
                    }
                },
                lineStyle: {
                    normal: {
                        width: 2
                    }
                }
            }]
        }
    }
    getInitialState(){

    }
    componentDidMount() {
        this.setState({
            option: {
                xAxis : {
                    data : this.props.data.x
                },
                series: [
                    {
                        name:this.props.data.name,
                        data: this.props.data.y
                    }
                ]
            }
        });
    }
    render() {
       
        return (
            <ReactEcharts
                option = {this.state.option}
                className={'react_for_echarts'}
            />
        )
    }
}

export default LineEcharts;