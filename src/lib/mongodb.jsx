// import mongoose from "mongoose";

// export const connectMongoDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.log("Error connecting to MongoDB: ", error);
//   }
// };
const mongoose = require('mongoose');
class Database {
  constructor() {
    // The database connection
    this.connection = null;
  }

  async connect() {
    // Check if the connection is already established
    console.log(process.env.MONGODB_URI)

    if (this.connection) {
      return this.connection;
    }

    // If no connection exists, create a new one
    try {
      console.log(process.env.MONGODB_URI)
      this.connection = await mongoose.connect(process.env.MONGODB_URI);
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Database connection failed:', error);
      process.exit(1);
    }

    return this.connection;
  }
}

// Export an instance of Database
module.exports = new Database();
