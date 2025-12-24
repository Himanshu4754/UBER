const http = require('http');
const app = require('./app');
const path = require('path');
const express = require('express');
const { initializeSocket } = require('./socket');
const connectToDB = require('./db/db');

const port = process.env.PORT || 3000;

connectToDB();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    });
}

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});