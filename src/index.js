import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from './db/index.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT} 🌎`)
    });

    app.get('/', (req, res) => {
        res.send('Server is running...')
    })
})
.catch((err) => console.log(`Server is not running due to ${err}`))
