/**packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const programSchema = new mongoose.Schema({
    code: {
        type: "String",
        require: true,
        unique: true
    },
    name: {
        type: "String",
        require: true
    },
    name_director: {
        type: "String",
        require: true
    },
    faculty_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_faculty",
        require: true
    }
});

/**schema sxportations */
programSchema.plugin(validator);
module.exports = programSchema;
