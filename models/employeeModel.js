const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
    },
    organizationId: {
        type: String,
        required: true,
    },
    birthday: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        required: true,
    },
    personalDiscounts: {
        type: Array,
        default: [],
    }
}, {versionKey: false});

module.exports = model('Employee', employeeSchema);
