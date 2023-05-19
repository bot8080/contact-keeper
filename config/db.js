const mongoose = require('mongoose');
const config = require('config');

const dbUrl = config.get('mongoURI');

const connectDB = async () => {

    try {
        await mongoose.connect(dbUrl, { dbName: 'ContactKeeper' });
        console.log("DB Connected");

    }
    catch (err) {
        console.log(err.message);
    }
}


module.exports = connectDB