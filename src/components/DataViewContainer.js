import React, { Component } from 'react';

import _ from 'lodash';
import { Radio, Row, Col, Switch } from 'antd'; import ShotChart from './ShotChart';
import CounterSlider from './CounterSlider';

class DataViewContainer extends Component {

    state = {
        minCount: 2,
        chartType: "hexbin",
        displayTooltip: true
    }

    onCounterSliderChange = (count) => {
        console.log(count)
        this.setState({
            minCount: count
        })
    }

    onChartTypeChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            chartType: e.target.value,
        });
    };

    onChangeTooltipChange = checked => {
        console.log(checked);
        this.setState({
            displayTooltip: checked
        })
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    chartType={this.state.chartType}
                    displayTooltip={this.state.displayTooltip}
                />
                <div className={"filters"}>
                    <CounterSlider
                        value={this.state.minCount}
                        onCounterSliderChange={_.debounce(this.onCounterSliderChange, 500)} />
                    <Row>
                        <Col span={9}>
                            <Radio.Group
                                onChange={this.onChartTypeChange}
                                value={this.state.chartType}>
                                <Radio value="hexbin">hexbin</Radio>
                                <Radio value="scatter">scatter</Radio>
                            </Radio.Group>
                        </Col>

                        <Col span={4}>
                            <Switch
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                defaultChecked
                                onChange={this.onChangeTooltipChange}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default DataViewContainer;