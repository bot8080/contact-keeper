const express = require('express');
const router = express.Router();
const { body, validationResult } = require("express-validator");
const auth = require('../middleware/auth');
const Contact = require("../models/Contact");
const User = require("../models/User");

// @route   GET /api/contacts
// @desc    get all user's contacts
// @access  private

router.get('/', auth ,async(req, res)=>{
    try {
        const contacts = await Contact.find({user: req.user.id}).sort({date: -1})
        res.send(contacts)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});


// @route   POST /api/contacts
// @desc    Add new contact
// @access  private

// two middlewares passed in this request
router.post('/',[ auth, body("name").notEmpty().withMessage("Name is required")] ,
    async(req, res)=>{
    const errors = validationResult(req)

    if (!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }

    const {name, email, phone, type } = req.body

    try {
        const newContact = new Contact({name: name, email: email, phone: phone, type: type, user : req.user.id})  
        const contact = await newContact.save()
        res.json(contact)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
        
    }
});


// @route   PUT /api/contacts:id
// @desc    Update contact
// @access  private

router.put('/:id',auth, async(req, res)=>{
    const {name, email, phone, type } = req.body
    
    //contact object 
    const contactField = {};

    if (name) contactField.name = name;
    if (email) contactField.email = email;
    if (phone) contactField.phone = phone;
    if (type) contactField.type = type;

    try {
        let contact = await Contact.findById(req.params.id)

        if (!contact) return res.status(401).json({msg: 'User not Found'})

        if (contact.user.toString() !== req.user.id) 
        {
            return res.status(404).json({msg: 'User not authorized'})  
        } 

        contact = await Contact.findByIdAndUpdate(req.params.id,
            { $set : contactField },
            { new: true })
            res.json(contact)
            
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }

});

// @route   DELETE /api/contacts:id
// @desc    delete contact
// @access  private

router.delete('/:id', auth ,async(req, res)=>{
    try {
        let contact = await Contact.findById(req.params.id)

        if (!contact) return res.status(401).json({msg: 'User not Found'})

        if (contact.user.toString() !== req.user.id) 
        {
            return res.status(404).json({msg: 'User not authorized'})  
        } 

        await Contact.findByIdAndRemove(req.params.id)
        res.json({msg : "Contact Removed"})
            
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
});

module.exports = router;
