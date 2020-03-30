import React, { Component } from 'react';

import ShotChart from './ShotChart';
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
                <CounterSlider onCounterSliderChange={ this.onCounterSliderChange }/>
            </div>
        );
    }
}

export default DataViewContainer;