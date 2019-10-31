import React, { Component } from 'react';

import './LeftPanel.sass';

export class LeftPanel extends Component {
    render() {
        return (
            <div className="left-panel">
                <h1 className="left-panel__username">Привет, {this.props.userName}</h1>
                <hr />
                <div className="chats-wrapper">
                    <div className="available-chat">
                        <p># Название чата</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftPanel;
