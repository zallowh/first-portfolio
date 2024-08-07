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

// Health check route
app.get('/health', async (req, res) => {
    try {
        // Check database connection
        const dbConnection = await connectDB(); // Assume connectDB() returns a promise
        if (!dbConnection) {
            throw new Error('Database connection failed');
        }

        // Add other health checks here (e.g., third-party services)

        // If all checks pass
        res.status(200).json({
            status: 'healthy',
            message: 'All systems are operational',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({
            status: 'unhealthy',
            message: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

// Routes
app.use("/api", router);

const PORT = process.env.PORT || 8080;

// Connect to DB and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log('Server is running on port', PORT);
    });
}).catch(err => {
    console.error('Failed to connect to DB:', err);
    process.exit(1); // Exit if database connection fails
});
