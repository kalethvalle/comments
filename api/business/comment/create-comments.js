const express = require('express');
const router = express.Router();

const Comments = require('../../models/comments');

router.post('/', async (req, res) => {
    const { name, email, webSite, comment } = req.body;
    try {
        const comments = new Comments({
            name,
            email,
            webSite,
            comment
        });
        await comments.save();
        res.status(200);
        res.json({
            comments
        })
    } catch (err) {
        const error = [];
        
        if (!err.errors) {
            error.push(`email ${Object.values(err.keyValue)} is already registered`)
        } else {
            Object.keys(err.errors).map(item => error.push(err.errors[`${item}`].message));
        }
        
        res.status(400);
        res.json({ error, err })        
    }

});

module.exports = router;