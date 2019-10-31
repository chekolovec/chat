import React from 'react';
import PropTypes from 'prop-types';

import './ChatSidebar.sass';

const ChatSidebar = ({ users }) => (
    <aside className="chat-sidebar" >
        <p>Человек онлайн: </p>
        <hr />
        <ul>
            {users.map(user => (
                <li className="chat-sidebar__user" key={user.id}>{user.name}</li>
            ))}
        </ul>
    </aside>
)

ChatSidebar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired 
}

export default ChatSidebar