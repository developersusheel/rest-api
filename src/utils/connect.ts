import mongoose from 'mongoose';
import config from "config";
import logger from './logger';


async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("Connected to MongoDB");
  } catch (error) {
    logger.info("Could not connect to db");
  }
}

export default connect;