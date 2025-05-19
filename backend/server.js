const express = require('express');
const cors = require('cors');
const app = express();
const mysql=require('mysql');

// Middleware
app.use(cors());

// Sample Data (Replace with your database data later)
const facultyData = [
    {
        id: 1,
        title: 'Head of the Department',
        name: 'Dr. Mahesh Mulani',
        photoUrl: 'https://example.com/path-to-image.jpg',
    },
    {
        id: 2,
        title: 'Assistant Professor',
        name: 'Dr. John Doe',
        photoUrl: 'https://example.com/path-to-image-2.jpg',
    },
];

// API Endpoint
app.get('/api/faculty', (req, res) => {
    res.json(facultyData);
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
 