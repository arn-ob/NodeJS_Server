const mongoose = require('mongoose');
const uuid = require('uuid').v4

const sign = mongoose.Schema({
    
    user_id:           { type: String, default: uuid() },
    username:          { type: String, default: '' },
    mobile_no:         { type: String, default: '' },
    address:           { type: String, default: '' },
    role:              { type: String, default: 'normal' },

    created_at: { type: Date, default: Date.now() }
});


// Pipeline test.
mongoose.set('useCreateIndex', true);
module.exports = mongoose.model('sign', sign, 'sign');