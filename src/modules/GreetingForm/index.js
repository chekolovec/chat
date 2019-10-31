import React, { Component } from 'react';

import { SetName } from '../../containers/SetName';
import './greetingForm.sass';

export class GreetingForm extends Component {
    render() {
        return (
            <div className="greeting-block">
                <h1 className="greeting-block__title">Введите имя</h1>
                <SetName />
            </div>
        );
    }
}

export default GreetingForm;
