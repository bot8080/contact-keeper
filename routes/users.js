const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const config = require('config');

// @route   POST /api/users
// @desc    Resgister a user
// @access  Public
router.post(
    "/",
    [
        body("name").notEmpty().withMessage("Name is required"),
        body("email").isEmail().withMessage("Please input a valid email"),
        body("password")
            .isLength({ min: 6 })
            .withMessage("Please enter a password with 6 or more characters"),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body

        try {
            let newuser = await User.findOne({ email: email })

            if (newuser) {
                return res.status(400).json({ msg: "User already exists" })
            }

            newuser = new User({
                name, email, password
            })

            const salt = await bcrypt.genSalt(10)
            newuser.password = await bcrypt.hash(password, salt)

            await newuser.save()

            const payload = {
                user: {id: newuser.id}
            }

            jwt.sign(payload, 
                config.get('jwtSecret'), 
                {expiresIn: 3600}, 
                (err, token)=>{ 
                    if (err) throw err; 
                    res.json({token})
                })

            // res.send('User Saved')
        } catch (error) {
            console.log(error)
            res.status(500).send("Server error")
        }
    }
);

module.exports = router;
