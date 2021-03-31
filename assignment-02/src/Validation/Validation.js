import React from 'react';

const validation = (props) => {

    let returnMessage = null;

    if (props.length < 5) {
        returnMessage = "Text Too Short";
    }
    else {
        returnMessage = "Text Long Enough";
    }

    return (
        <div>
            <p>{returnMessage}</p>
        </div>
    );
}

export default validation;