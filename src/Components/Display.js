import React from "react"
import setTimeFormat from "../utils/setTimeFormat"
import PropTypes from "prop-types";

export const Display = ({time}) => (
        <div className='display'>
                    {setTimeFormat(time)}
        </div>
);
Display.propTypes = {
    time: PropTypes.number.isRequired
}