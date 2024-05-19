const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
require('dotenv').config()

router.post('/', async (req, res) => {
        let email = req.body.email
        try {
            let userdata = await User.findOne({email})
            if(!userdata) {
                return res.status(400).json({ errors:"Please enter correct credentials" })
            }

            const pwdCompare = await bcrypt.compare(req.body.password,userdata.password)
            if(!pwdCompare) {
                return res.status(400).json({ errors:"Invalid password" })
            }

            const data = {
                user:{
                    id:userdata.id
                }
            }
            const authToken = jwt.sign(data,process.env.JWT_SECRET)
            return res.json({ success: true, authToken:authToken})
        } catch (error) { 
            res.json({ success: false})
        }
    })

module.exports = router;