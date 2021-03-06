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

module.exports.getTotalTimeByDays = (id, stringDate) => {
    return new Promise((reslove, reject) => {
        const sql = `SELECT id FROM count_time_code WHERE user_id = ${id} AND Date = '${stringDate}'`;

        connection.query(sql, (error, result) => {
            if (!error) {
                if (result.length === 0) {
                    return reslove([]);
                } 
                const id = JSON.parse(JSON.stringify(result))[0].id;
                let sql = `SELECT * FROM count_time_code WHERE id IN (${id}`;

                for (let i = 1; i < 7; i++) {
                    sql += `, ${(id + i)}`;
                }
                sql += `)`;

                connection.query(sql, (e, r) => {
                    if (!e) {
                        const res = JSON.parse(JSON.stringify(r));
                        reslove(res);
                    } else {
                        reject(e);
                    }
                })
            } else {
                reject(error);
            }
        });
    });
}

module.exports.getTotalTimeByWeeks = (id, stringDate) => {
    return new Promise((reslove, reject) => {
        const sql = `SELECT id FROM count_time_code WHERE user_id = ${id} AND Date = '${stringDate}'`;

        connection.query(sql, (error, result) => {
            if (!error) {
                if (result.length === 0) {
                    return reslove([]);
                } 
                const id = JSON.parse(JSON.stringify(result))[0].id;
                let sql = `SELECT * FROM count_time_code WHERE id IN (${id}`;

                for (let i = 1; i < 28; i++) {
                    sql += `, ${(id + i)}`;
                }
                sql += `)`;

                connection.query(sql, (e, r) => {
                    if (!e) {
                        const res = JSON.parse(JSON.stringify(r));
                        reslove(res);
                    } else {
                        reject(e);
                    }
                })
            } else {
                reject(error);
            }
        });
    });
}

module.exports.getTotalTimeByMonths = (id, year) => {
    return new Promise((reslove, reject) => {
        const sql = `SELECT * FROM count_time_code WHERE user_id=${id} AND YEAR(Date) = '${year}'`;
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

// function add(s, e, month, length) {
//     for (let index = 1; index <= length; index ++) {
//         let sql = `INSERT INTO count_time_code (start_time, end_time, user_id, Date) VALUES (${s}, ${e}, 1, '2022-${month}-${index}');`
//         connection.query(sql);
//     }
// }