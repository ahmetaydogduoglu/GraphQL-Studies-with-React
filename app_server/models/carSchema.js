const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
    brand: { type: String },
    model: { type: String },
    color: { type: String },
    cost: { type: Number }
}, { collection: 'Cars' });

module.exports = mongoose.model('Cars', carSchema);