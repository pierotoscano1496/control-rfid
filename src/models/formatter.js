function getDateString(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateString = `${day >= 10 ? day : `0${day}`}/${month >= 10 ? month : `0${month}`}/${year >= 10 ? year : `0${year}`}`;

    return dateString;
}

function getTimeString(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeString = `${hours >= 10 ? hours : `0${hours}`}:${minutes >= 10 ? minutes : `0${minutes}`}:${seconds >= 10 ? seconds : `0${seconds}`}`;

    return timeString;
}

function getDateTimeString(date) {
    return `${getDateString(date)} ${getTimeString(date)}`;
}

function getDateISOString(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateString = `${year}-${month >= 10 ? month : `0${month}`}-${day >= 10 ? day : `0${day}`}`;

    return dateString;
}

module.exports = {
    getDateString,
    getTimeString,
    getDateTimeString,
    getDateISOString
};