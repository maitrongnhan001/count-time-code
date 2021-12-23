const express = require('express');

const count_time_codeController = require('../controllers/count_time_code_controller');

const router = express.Router();

router.get('/get_total_time_code', count_time_codeController.getTotalTimeCode);

router.get('/get_dashboard_by_days', count_time_codeController.getDashBoardByDays);

router.get('/get_dashboard_by_weeks', count_time_codeController.getDashBoardByWeeks);

router.get('/get_dashboard_by_months', count_time_codeController.getDashBoardByMonths);

router.post('/start_code', count_time_codeController.startCode);

router.post('/pause_code', count_time_codeController.pauseCode);

module.exports = router;