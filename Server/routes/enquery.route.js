const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const { access } = require("../middleware/access.middleware");
const enquiryModel = require("../models/enquiries.model");

require("dotenv").config();

const enquiryRouter = express.Router();

enquiryRouter.post("/enquiry", auth, access("user"), async(req, res) => {
    const enquiryData = {...req.body, userId: req.user._id }
    try {
        const newEnquiry = new enquiryModel(enquiryData);
        await newEnquiry.save();
        res.status(201).json({ message: "Enquiry submitted successfully." });
    } catch (error) {
        res.status(500).json({ message: error });
    }
})
enquiryRouter.get("/enquiry", auth, access("admin"), async(req, res) => {
    try {
        const enquiries = await enquiryModel.find();
        if (!enquiries.length) {
            return res.status(404).json({ message: 'No enquiries found' });
        }
        res.status(200).json(enquiries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = {
    enquiryRouter
}