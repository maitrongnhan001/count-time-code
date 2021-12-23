const { connection } = require('../config/database.js');

module.exports.getTotalTimeCode = (id) => {
    return new Promise((reslove, reject) => {
        const sql = "SELECT start_time, end_time FROM count_time_code WHERE user_id = " + id;
        connection.query(sql, (error, result) => {
            if (!error) {
                const res = JSON.parse(JSON.stringify(result));
                reslove(res);
            } else {
                reject(error);
            }
        })
    });
}

module.exports.getTotalTimeByDays = (id) => {
    return new Promise((reslove, reject) => {

    });
}

module.exports.getTotalTimeByWeeks = (id) => {
    return new Promise((reslove, reject) => {

    });
}

module.exports.getTotalTimeByMonths = (id) => {
    return new Promise((reslove, reject) => {

    });
}

module.exports.startCode = (time, id) => {
    return new Promise((resolve, reject) => {
        //function set time start code
    });
}

module.exports.pauseCode = (time, id) => {
    return new Promise((resolve, reject) => {
        //function set time start code
    });
}