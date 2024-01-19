import dotenv from "dotenv";
import connectDB from "../src/db/index.js";
import { app } from "./app.js";
dotenv.config();
const PORT = process.env.PORT || 3000;

connectDB()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Server running on port http://localhost:${PORT} 🌎`)
    })
}).catch((error)=>{
    console.log(`there was a problem for start the server 💊 ${error}`)
})