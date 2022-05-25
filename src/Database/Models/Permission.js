const mongoose = require("mongoose")

const PermissionsModel = new mongoose.Schema(
    {
        Dashboard: [
            {
                type: String,
                enum: ['create', 'read', "update", "delete"],
                default: []
            },
        ],
        InstructorRequests: [
            {
                type: String,
                enum: ['create', 'read', "update", "delete"],
                default: []
            },
        ],
        Admin: [
            {
                type: String,
                enum: ['create', 'read', "update", "delete"],
                default: []
            },
        ],
        Students: [
            {
                type: String,
                enum: ['create', 'read', "update", "delete"],
                default: []
            },
        ],
        Instructors: [
            {
                type: String,
                enum: ['create', 'read', "update", "delete"],
                default: []
            },
        ],
        Financials: {
            Overview: [
                {
                    type: String,
                    enum: ['create', 'read', "update", "delete"],
                    default: []
                },
            ],
            Reports: [
                {
                    type: String,
                    enum: ['create', 'read', "update", "delete"],
                    default: []
                },
            ],
            Statements: [
                {
                    type: String,
                    enum: ['create', 'read', "update", "delete"],
                    default: []
                },
            ],
        },
        RolesAndPermissions: [
            {
                type: String,
                enum: ['create', 'read', "update", "delete"],
                default: []
            },
        ],
        Settings: [
            {
                type: String,
                enum: ['create', 'read', "update", "delete"],
                default: []
            },
        ],
        Reviews: [
            {
                type: String,
                enum: ['create', 'read', "update", "delete"],
                default: []
            },
        ],
        Lecture: [
            {
                type: String,
                enum: ['create', 'read', "update", "delete"],
                default: []
            },
        ],
        Course: [
            {
                type: String,
                enum: ['create', 'read', "update", "delete"],
                default: []
            },
        ],
        Notice: [
            {
                type: String,
                enum: ['create', 'read', "update", "delete"],
                default: []
            },
        ],
        StudentAnalytics: [
            {
                type: String,
                enum: ['create', 'read', "update", "delete"],
                default: []
            },
        ],
        InstructorAnalytics: [
            {
                type: String,
                enum: ['create', 'read', "update", "delete"],
                default: []
            },
        ],

    }
)

module.exports = PermissionsModel
