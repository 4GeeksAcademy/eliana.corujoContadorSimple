import React from 'react';
import PropTypes from 'prop-types';

// Lo que se supone que muestra
const SecondsCounter = (props) => {
    return (
        <div className="bigCounter">
            <div className="calendar-icon">
                <i className="far fa-clock"></i>
            </div>
            <div className="digit four">{Math.floor(props.seconds / 1000) % 10}</div>
            <div className="digit three">{Math.floor(props.seconds / 100) % 10}</div>
            <div className="digit two">{Math.floor(props.seconds / 10) % 10}</div>
            <div className="digit one">{Math.floor(props.seconds / 1) % 10}</div>
        </div>
    );
};

SecondsCounter.propTypes = {
    seconds: PropTypes.number
};

export default SecondsCounter;