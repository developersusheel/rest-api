import mongoose from 'mongoose';
import config from "config";


async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    logger.error("Could not connect to db");
    console.error('Could not connect to DB')
  }
}

export default connect;