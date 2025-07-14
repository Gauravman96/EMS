import express from 'express';
import cors from 'cors';
import authRouter from './Routes/auth.js'
import connectToDatabase from './DB/db.js'


connectToDatabase()
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth',authRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.Port}`);
});