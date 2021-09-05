var mongoose = require('mongoose');
require('mongoose-type-email');

const resumeSchema  = new mongoose.Schema({
    visibleSections: {
        personalInfo: Boolean, experience: Boolean, education: Boolean, project: Boolean, 
        publication: Boolean, certification: Boolean,
        skill: Boolean, language: Boolean, interest: Boolean,
    },
    personalInfo:  {
        fullName: String,
        designation: String,
        phoneNo: {
            type: Number,
            validate: {
                validator: function(v) {
                    return /d{10}/.test(v);
                },
                message: '{VALUE} is not a valid 10 digit number!'
            }
        },
        email: mongoose.SchemaTypes.Email,
        links: [{String}],
        objective: String,
        profilePic:  {
            data: Buffer,
            contentType: String
        }
    },
    Educations:[{
        degree: String,
        schoolName: String,
        description: String,
        grade: String,
        scale: String,
        startDate: Date,
        endDate: Date,
        current: Boolean   
    }],
    Experiances:[{
        designation: String,
        companyName: String,
        description: String,
        stack: [{String}],
        startDate: Date,
        endDate: Date,
        current: Boolean  
    }],
    Projects:[{
        designation: String,
        companyName: String,
        description: String,
        stack: [{String}],
        startDate: Date,
        endDate: Date,
        current: Boolean  
    }],
    Publications:[{
        topic: String,
        journal: String,
        date: Date,
    }],
    certifcations:[{
        certificateName: String,
        organizationName: String,
        date: Date,
        }],
    Skills: [{String}],
    Interests: [{String}],
    Languages: [{String}],

  });

const Resume = mongoose.model('Resume', resumeSchema)

module.exports = Resume;