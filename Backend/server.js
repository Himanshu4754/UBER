const http = require('http');
const app = require('./app');
const path = require('path');
const { initializeSocket } = require('./socket');
const connectToDB = require('./db/db');

const port = process.env.PORT || 3000;

connectToDB();

if (process.env.NODE_ENV === 'production') {
    const express = require('express');
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    
    app.use((req, res, next) => {
        if (!req.path.startsWith('/api') && 
            !req.path.startsWith('/users') && 
            !req.path.startsWith('/captains') && 
            !req.path.startsWith('/maps') && 
            !req.path.startsWith('/rides')) {
            res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
        } else {
            next();
        }
    });
}

const server = http.createServer(app);

initializeSocket(server);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});