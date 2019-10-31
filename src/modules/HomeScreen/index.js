import React, { Component } from 'react';
import './homeScreen.sass'
import LeftPanel from '../../components/LeftPanel';
import ChatPanel from '../../components/ChatPanel';


export class HomeScreen extends Component {
    render() {
        return (
            <div className="home-screen__wrapper">
                <LeftPanel />
                <ChatPanel />
            </div>
        );
    }
}

export default HomeScreen;
