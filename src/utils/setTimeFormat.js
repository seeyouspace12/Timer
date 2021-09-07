const setTimeFormat = (totalSecs) => {
    const seconds = (totalSecs % 60);
    const minutes = Math.floor(totalSecs / 60);
    const hours = Math.floor(totalSecs / 3600);
    const hoursFormat = (hours < 1)
        ? '00'
        : (hours >= 1 && hours <= 9) ? `0${hours}` : `${hours}`;
    const minutesFormat = (minutes < 10)
        ? ((minutes === 0) ? '00' : `0${minutes}`)
        : (minutes > 59) ? `${minutes % 60}` : `${minutes}`;
    const secondsFormant = (seconds < 10) ? `0${seconds}` : `${seconds}`;

    return `${hoursFormat}:${minutesFormat}:${secondsFormant}`;
};

export default setTimeFormat;