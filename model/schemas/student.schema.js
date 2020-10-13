/**packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
const studentSchema = new mongoose.Schema({
    code: {
        type: "String",
        require: true,
        unique: true
    },
    name: {
        type: "String",
        require: true
    },
    lastname: {
        type: "String",
        require: true
    },
    email: {
        type: "String",
        require: true,
        unique: true
    },
    phone: {
        type: "String",
        require: true
    },
    carrer: {
        type: "String",
        require: true
    },
    program_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_programs",
        require: true
    }

});

/**schema sxportations */
studentSchema.plugin(validator);
module.exports = studentSchema;
