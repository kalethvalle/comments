const express = require('express');
const router = express.Router();

const Comments = require('../../models/comments');

router.get('/', async (req, res) => {
    const comments = await Comments.find();
    res.json({
        comments
    });
});

module.exports = router;