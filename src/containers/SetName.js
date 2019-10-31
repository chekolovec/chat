import { connect } from 'react-redux';
import SetNameComponent from '../components/SetName';
import { setName } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
    dispatch: (name) => {
        dispatch(setName(name))
    }
})

export const SetName = connect(() => ({}), mapDispatchToProps)(SetNameComponent)