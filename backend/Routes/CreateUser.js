const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

const bcrypt = require("bcryptjs")

router.post('/',
    [
        body('name').isLength({ min: 2 }),
        body('password').isLength({ min: 6 }),
        body('email').isEmail()
    ],
    async (req, res) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).send({ errors: result.array() })
        }

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt)

        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPassword
            }).then(res.json({ success: true }))
        } catch (error) {
            res.json({ success: false })
        }
    })

module.exports = router;