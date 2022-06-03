const express = require('express');
const router = express.Router();

const Comments = require('../../models/comments');

router.get('/:id', async (req, res) => {
    const comment = await Comments.findById(req.params.id);
    res.json({
        comment
    });
});

module.exports = router;