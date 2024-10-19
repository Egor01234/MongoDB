/*import config from './../config/config' 
import app from './express'
import mongoose from 'mongoose' 
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true,
//useCreateIndex: true, 
useUnifiedTopology: true } )
mongoose.connection.on('error', () => {
throw new Error(`unable to connect to database:${config.mongoUri}`) 
})
app.get("/", (req, res) => {
 res.json({ message: "Welcome to User application." });
});
app.listen(config.port, (err) => { 
if (err) {
console.log(err) 
}
console.info('Server started on port %s.', config.port) 
})
*/

// Import configuration and other modules
import config from '../config/config'; // Check the file path
import app from './express';
import mongoose from 'mongoose';

// Set Mongoose Promise to global Promise
mongoose.Promise = global.Promise;

// Connect to MongoDB using the configured URI
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  // Other MongoDB options...
  useUnifiedTopology: true
});

// Handle MongoDB connection errors
mongoose.connection.on('error', () => {
  throw new Error(`Unable to connect to database: ${config.mongoUri}`);
});

// Define an endpoint for your Express app
app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." });
});

// Start the Express app
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('Server started on port %s.', config.port);
});
