const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({

    destination: { type: String, required: true },
    when: { type: Date, required: true },
    interest: { type: String, required: true },
    duration: { type: Number, required: true },
    traveller: { type: Number, required: true },
    budget: { type: String, required: true },
    userId: { type: String }
}, { timestamps: true, versionKey: false });

const enquiryModel = mongoose.model('enquirie', enquirySchema);
module.exports = enquiryModel;