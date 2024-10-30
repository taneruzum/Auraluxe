import express, { json } from 'express';
import errorHandler from './middlewares/errorHandler';
import connectDb from './config/dbConnection';
const dotenv = require('dotenv').config();

//connectDb()
const app = express()
const port = process.env.PORT || 5000;

app.use(json());
app.use(errorHandler)

app.use("/api/users", require("./routes/userRoutes"))


app.listen(port, () => {
    console.log(`Server running on this port | ${port} `);
})