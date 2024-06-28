const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse application/json
app.use(bodyParser.json());

// MySQL Connection Pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tasksdb',
    connectionLimit: 10
});

// Routes
// Example route for creating a task
app.post('/api/tasks', (req, res) => {
    const {
        title, firstname, lastname, position, company, businessArena, employees,
        streetNr, additionalInfo, zipCode, place, country, code, phoneNumber, email, acceptTerms
    } = req.body;

    const sql = `
        INSERT INTO tasks
        (title, firstname, lastname, position, company, businessArena, employees,
        streetNr, additionalInfo, zipCode, place, country, code, phoneNumber, email, acceptTerms)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        title, firstname, lastname, position, company, businessArena, employees,
        streetNr, additionalInfo, zipCode, place, country, code, phoneNumber, email, acceptTerms
    ];

    pool.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).json({ error: 'Failed to insert task' });
            return;
        }
        console.log('Task added:', results.insertId);
        res.status(201).json({ id: results.insertId });
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
