import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";


async function connect(){

    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

    mongoose.set('strictQuery', true)
    // const db = await mongoose.connect(getUri);
    const db = await mongoose.connect('mongodb+srv://piyushbhawsar:xjqf5MhCnYlJzB99@cluster0.hfhedsn.mongodb.net/test');
    console.log("Database Connected")
    return db;
}

export default connect;