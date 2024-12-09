const mongoose = require("mongoose");

const connectionDb = async () =>{ 
    try{
        const connect = await mongoose.connect(process.env.Connection_String);
        console.log("Database connected: ",connect.connection.host, connect.connection.name);
    }
    catch (err) {
        console.log(err);

    }
};

module.exports = connectionDb;
