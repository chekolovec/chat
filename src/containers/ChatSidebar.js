import { connect } from 'react-redux';
import ChatSidebarComponent from '../components/ChatSidebar';

export const ChatSidebar = connect(state => ({
    users: state.users
}), {})(ChatSidebarComponent)