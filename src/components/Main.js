import React, { Component } from 'react';

import nba from '../nba-client';
import Profile from './Profile';
import ShotChart from './ShotChart';
import DataViewContainer from './DataViewContainer';
import SearchBar from './SearchBar';

class Main extends Component {
    state = {
        playerId: 201939,
        playerInfo: {}
    }

    componentDidMount() {
        window.nba = nba;
        nba.stats.playerInfo({ PlayerID: nba.findPlayer('LeBron James').playerId })
            .then((info) => {
                // console.log(info);
                const playInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                console.log(playInfo);
                this.setState({ playerInfo: playInfo });
            })
    }


    render() {
        return (
            <div className="main">
                <SearchBar />
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo} />
                    <DataViewContainer playerId={this.state.playerId} />
                </div>
            </div>
        );
    }
}

export default Main;