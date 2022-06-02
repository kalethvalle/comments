const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: [35, 'Must have a max of 35 characters'],
        validate: {
            validator: (v) => {
                return /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(v);
            }
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v) => {
                return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(v);
            }
        }
    },
    webSite: {
        type: String,
        required: false,
        validate: {
            validator: (v) => {
                return /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.test(v);
            }
        }
    },
    comment: {
        type: String,
        required: true,
        maxlength: [100, 'Must have a max of 100 characters'],
        validate: {
            validator: (v) => {
                return /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(v);
            }
        }
    }
});

module.exports = mongoose.model('comments', CommentSchema);