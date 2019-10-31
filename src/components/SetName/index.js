import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input} from 'antd';

import Button from '../../components/Button';

const SetName = (props) => {

    return (
        <div className="greeting-form__wrapper">            
            <Form className="greeting-form" 
                onSubmit={(e) => {
                    e.preventDefault();
                    props.dispatch(e.target.name.value);
                    e.target.name.value = '';
                }}>
                <Form.Item>
                    <Input
                        size="large"
                        placeholder="Ваше имя"
                        name="name"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" size="large" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

SetName.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default SetName;
