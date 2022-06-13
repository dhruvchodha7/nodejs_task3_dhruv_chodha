const express = require('express');
const router = express();
const { student, teacher, list } = require('../controller/task3Controller');
router.route('/student').post(student);
router.route('/teacher').post(teacher);

router.route('/').get(list);

module.exports = router;