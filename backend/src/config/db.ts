import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';

dotenv.config();

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI!, {
        useUnifiedTopology: true, // Check if this is needed in your mongoose version
      } as ConnectOptions);
    } catch (error) {
      console.error('Database connection error:', error);
    }
  };
  

export default connectDB;
