import React, { Component } from 'react';

import _ from 'lodash';
import { Radio, Row, Col, Switch } from 'antd';import ShotChart from './ShotChart';
import CounterSlider from './CounterSlider';

class DataViewContainer extends Component {

    state = {
        minCount: 2
    }

    onCounterSliderChange = (count) => {
        console.log(count)
        this.setState({
            minCount: count
        })
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart playerId={ this.props.playerId } 
                           minCount={ this.state.minCount }/>
                <CounterSlider onCounterSliderChange={ _.debounce(this.onCounterSliderChange, 500)}/>
            </div>
        );
    }
}

export default DataViewContainer;