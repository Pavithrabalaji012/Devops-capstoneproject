
const test = require('node:test');
const assert = require('node:assert');
const http = require('node:http');
const express = require('express');

const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        application: 'Node.js DevOps Capstone'
    });
});

test('Health endpoint should return UP', async () => {
    const server = http.createServer(app);

    await new Promise(resolve => server.listen(0, resolve));

    try {
        const port = server.address().port;

        const response = await fetch(
            `http://127.0.0.1:${port}/health`
        );

        const data = await response.json();

        assert.strictEqual(response.status, 200);
        assert.strictEqual(data.status, 'UP');
    } finally {
        await new Promise(resolve => server.close(resolve));
    }
});
