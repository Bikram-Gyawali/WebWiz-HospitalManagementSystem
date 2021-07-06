const express= require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
const cors = require("cors");
const multer = require("multer");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

const app= express();

const {notFound, errorHandler}= require('./middleware/errorHandlers');

//routes
const userRoutes = require("./routes/userRoutes");

dotenv.config()

//middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(express.urlencoded({ extended: false }));


app.use("/api/user", userRoutes);


app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, ()=> console.log(`SERVER UP AND RUNNING`))