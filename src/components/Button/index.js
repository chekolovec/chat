import React from 'react';
import {Button as CustomButton} from 'antd';

import './Button.sass';

const Button = props => {
    return (
        <CustomButton {...props} className={props.className} />
    );
};

export default Button;