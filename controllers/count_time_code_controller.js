const count_time_code = require('../models/count_time_code.js');

module.exports.getTotalTimeCode = async (req, res) => {
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