// @route   POST /api/users
// @desc    Resgister a user
// @access  Public

const express = require('express');
const router = express.Router();
const { body, validationResult } = require("express-validator")

const User = require('../models/User')

router.post('/', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please input a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Please enter a password with 6 or more characters')
] , (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }
    res.send('passed');
});

module.exports = router;
