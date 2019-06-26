const mongoose = require('mongoose');

// mongod en windows
const URI = 'mongodb://localhost:27017/mean-crude';

mongoose.connect(URI)
    .then(db => console.log('DB is conneted'))
    .catch(err => console.log(err))


module.exports = mongoose;