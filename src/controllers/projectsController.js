const express = require('express');
const authMidlleware = require('../middlewares/auth');

const router = express.Router();

router.use(authMidlleware);

router.get('/', (req, res) => {
    res.send({ok: true});
});

module.exports = app => app.use('/projects', router);

