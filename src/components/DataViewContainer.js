import React, { Component } from 'react';

import _ from 'lodash';
import { Radio, Row, Col, Switch } from 'antd'; import ShotChart from './ShotChart';
import CounterSlider from './CounterSlider';

class DataViewContainer extends Component {

    state = {
        minCount: 2,
        chartType: "hexbin"
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

    render() {
        return (
            <div className="data-view">
                <ShotChart  playerId={ this.props.playerId }
                            minCount={ this.state.minCount } 
                            chartType={ this.state.chartType }/>
                <div className={"filter"}>
                    <CounterSlider
                        value={this.state.minCount}
                        onCounterSliderChange={_.debounce(this.onCounterSliderChange, 500)} />
                    <div>
                        <Radio.Group
                            onChange={this.onChartTypeChange}
                            value={this.state.chartType}>
                            <Radio value="hexbin">hexbin</Radio>
                            <Radio value="scatter">scatter</Radio>
                        </Radio.Group></div>
                </div>
            </div>
        );
    }
}

export default DataViewContainer;