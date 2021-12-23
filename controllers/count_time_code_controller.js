const count_time_code = require('../models/count_time_code.js');

module.exports.getTotalTimeCode = async (req, res) => {
    //function get total time code
    try {
        if (!req.query.id) {
            return res.status(400).json({
                msg: "Can't not get total time code"
            });
        }
        const id = req.query.id;
        //get total time code
        const time_code = await count_time_code.getTotalTimeCode(id);
        let count_time = 0;
        for (index in time_code) {
            count_time += (time_code[index].end_time - time_code[index].start_time);
        }

        count_time = count_time / 60;
        count_time = count_time.toFixed(2);

        return res.status(200).json({
            data: {
                count_time_code: count_time
            },
            status: 'successfully'
        });
    } catch (e) {
        return res.status(500).json({
            msg: "Server error"
        });
    }
}

module.exports.getDashBoardByDays = async (req, res) => {
    //get dashboard time code by days
    const id = 1;
    const day = {
        day: 20,
        month: 11,
        year: 2021 
    };
    //convert day to monday
    const date = new Date(day.year, day.month, day.day);
    const sub_day = date.getDay();
    if (sub_day > 0) {
        day.day -= sub_day;
    }
    //convert from day to string
    const string_date = `${day.year}-${day.month}-${day.day}`;

    const code_time = await count_time_code.getTotalTimeByDays(id, string_date);
    let dashboard_code_time_day = [];
    
    for (let index in code_time) {
        const date_result = code_time[index].Date.split('-');
        const d = new Date(code_time[index].Date);
        
        //handle time code & convert from senconds to minuters
        let total_time = code_time[index].end_time - code_time[index].start_time;
        total_time = (total_time / 60).toFixed(2);


        dashboard_code_time_day.push({
            date: {
                day: date_result[2],
                month: date_result[1],
                year: date_result[0]
            },
            total_time_code: total_time
        });    
    }

    return res.status(200).json({
        dashboard_code_time_day: dashboard_code_time_day,
        msg: 'successfully'
    });
}

module.exports.getDashBoardByWeeks = async (req, res) => {
    //get dashboard time code by weeks
}

module.exports.getDashBoardByMonths = async (req, res) => {
    //get dashboard time code by months
}

module.exports.startCode = async (req, res) => {
    //start code
}

module.exports.pauseCode = async (req, res) => {
    //pause code
}