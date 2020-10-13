/**packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

const facultySchema = new mongoose.Schema({
    id: {
        type: "String",
        require: true,
        unique: true
    },
    name: {
        type: "String",
        require: true
    },
    name_dean: {
        type: "String",
        require: true
    }


});

/**schema sxportations */
facultySchema.plugin(validator);
module.exports = facultySchema;
