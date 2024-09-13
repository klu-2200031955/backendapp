const mongoose = require("mongoose")

const studentcoursemappingschema = new mongoose.Schema({
    smapid:{
        type: String,
        required: true,
        unique: true,
        default: () => generateRandomId()
    },
    ccode: {
        type: String,
        required: true,
        // Ensure it's not marked as unique
        unique: false
    },
    facultyid: {
       type: String,
       required: true
    },
    fmapid: {
      type: String,
      required: true
    },
    studentid: {
      type: String,
      required: true
    },
    fullname: {
      type: String,
      required: true
    }
});

const scmapping = mongoose.model('StudentCourseMapping', studentcoursemappingschema);

function generateRandomId() {
    return Math.floor(Math.random() * 90000) + 10000;
}

module.exports = scmapping;
