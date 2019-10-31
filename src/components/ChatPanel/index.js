import React, { Component } from 'react';

import { MessagesList } from '../../containers/MessagesList';
import { AddMessage } from '../../containers/AddMessage';
import './ChatPanel.sass';
import { ChatSidebar } from '../../containers/ChatSidebar';

export class ChatPanel extends Component {
    render() {
        return (
            <div className="chat-panel">
                <div className="chat-panel__leftside">
                    <MessagesList />
                    <AddMessage />
                </div>
                <ChatSidebar />
            </div>
        );
    }
}

export default ChatPanel;
