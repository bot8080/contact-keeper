// @route   POST /api/users
// @desc    Resgister a user
// @access  Public

const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/User");


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
            let user = await User.findOne({ email: email })

            if (user) {
                return res.status(400).json({ msg: "User already exists" })
            }

            user = new User({
                name, email, password
            })

            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt)

            await user.save()

            res.send('User Saved')
        } catch (error) {
            console.log(error)
            res.status(500).send("Server error")

        }
    }
);

module.exports = router;
