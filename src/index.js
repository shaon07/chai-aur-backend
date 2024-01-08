import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🌎`)
})