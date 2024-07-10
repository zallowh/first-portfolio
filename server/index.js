const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('../server/config/db');
const router = require('../server/routes/index');

const app = express();

// Middleware setup
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", router);

const PORT = process.env.PORT || 8080;

// Connect to DB and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log('Server is running on port', PORT);
    });
});
