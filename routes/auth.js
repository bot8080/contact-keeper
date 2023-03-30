const express = require('express');
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../models/User");
const config = require('config');
const auth = require('../middleware/auth');

// @route   GET /api/auth
// @desc    get logged in
// @access  private

router.get('/', auth, async (req, res) => {
    try {
        console.log("here")
        const user = await User.findById(req.user.id).select('-password'); // in the middleware we added req.user = decoded.user
        res.json(user);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST /api/auth
// @desc    Auth user and get token 
// @access  private

router.post('/', [
    body("email").isEmail().withMessage("Please input a valid email"),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Please enter a password with 6 or more characters")
], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let savedUser = await User.findOne({ email: email });

        if (!savedUser) {
            return res.status(400).json("Invalid email")
        }

        const passmatch = await bcrypt.compare(password, savedUser.password);

        if (!passmatch) {
            return res.status(400).json("Invalid password")
        }

        const payload = {
            user: { id: savedUser.id }
        }

        jwt.sign(payload,
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err, token) => {
                if (err) throw err;
                res.json({ token })
            })

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;
