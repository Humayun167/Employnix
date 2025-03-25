import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'


// initialize express
const app = express();

// connect to databse
await connectDB()

// middleware
app.use(cors());
app.use(express.json());

// route
app.get('/', (req, res) => res.send('A[i working] !'))

// port
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
