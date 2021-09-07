import React from 'react';
import PropTypes from 'prop-types';

export const Buttons = ({start, stop, reset, wait}) => (
        <section className="buttons">
            <button type="button" id='start' onClick={start}>
                Start
            </button>
            <button type="button" id='stop' onClick={stop}>
                Stop
            </button>
            <button type="button" id='reset' onClick={reset}>
                Reset
            </button>
            <button type="button" id='wait' onClick={wait}>
                Wait
            </button>
        </section>
);

Buttons.propTypes = {
    time: PropTypes.number.isRequired,
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    wait: PropTypes.func.isRequired,
};