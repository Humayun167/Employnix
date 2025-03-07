import express from 'express'
import cors from 'cors'
import 'dotenv/config'


// Initialize express
const app = express()


// middleware
app.use(cors())
app.use(express.json())

// routes
app.get('/',(req,res)=>res.send("api working"))


// PORT
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

