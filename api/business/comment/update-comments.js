const express = require('express');
const router = express.Router();

const Comments = require('../../models/comments');

router.put('/:id', async (req, res) => {
    const { name, email, webSite, comment } = req.body;
    try {
        const comments = {
            name,
            email,
            webSite,
            comment
        };
        await Comments.findByIdAndUpdate(req.params.id, comments);
        res.status(200);
        res.json({
            comments
        })
    } catch (err) {
        const error = [];
        console.log(err);
        Object.keys(err.errors).map(item => error.push(err.errors[`${item}`].message));
        res.status(400);
        res.json({ error, err })        
    }

});

module.exports = router;