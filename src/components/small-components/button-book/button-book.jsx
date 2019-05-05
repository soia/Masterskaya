import React from 'react';

const ButtonBook = (props) => {

    return (
        <button
            className={props.bookStyles}
            onClick={props.onbooked}
        >
            {props.title}
        </button>
    );
  };

export default ButtonBook;