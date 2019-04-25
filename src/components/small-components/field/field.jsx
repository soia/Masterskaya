import React from 'react';
import style from './field.module.scss';

const Field = (props) => {
    const { id, labelText, type, placeholder, value, onChange, name, error } = props;

    return (
        <div className={style.inputWrapper}>
            <label htmlFor={id}>{labelText}</label>
            <input
                id={id}
                type={type}
                className={props.inputStyle}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                autoComplete="new-password"
            />
            {error ? (<div className={style.inputWrapper__invalid}>{error}</div>) : null}
        </div>
    );
};

export default Field
