

const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My first DevOps Capstone Project</title>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Segoe UI', sans-serif;
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                color: white;
                background: linear-gradient(-45deg,
                    #0f172a, #312e81, #6d28d9, #0f766e);
                background-size: 400% 400%;
                animation: gradient 12s ease infinite;
            }

            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }

            .circle {
                position: absolute;
                border-radius: 50%;
                background: rgba(255,255,255,0.10);
                animation: float 8s infinite ease-in-out;
            }

            .circle.one {
                width: 250px;
                height: 250px;
                top: 5%;
                left: 5%;
            }

            .circle.two {
                width: 180px;
                height: 180px;
                bottom: 5%;
                right: 8%;
                animation-delay: 2s;
            }

            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-35px); }
            }

            .container {
                position: relative;
                z-index: 1;
                width: 90%;
                max-width: 850px;
                padding: 55px 35px;
                text-align: center;
                border: 1px solid rgba(255,255,255,0.25);
                border-radius: 25px;
                background: rgba(255,255,255,0.12);
                backdrop-filter: blur(15px);
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                animation: appear 1.2s ease-out;
            }

            @keyframes appear {
                from {
                    opacity: 0;
                    transform: translateY(40px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .tag {
                display: inline-block;
                padding: 9px 18px;
                border-radius: 30px;
                background: rgba(255,255,255,0.18);
                font-size: 13px;
                letter-spacing: 2px;
                margin-bottom: 25px;
            }

            h1 {
                font-size: clamp(32px, 6vw, 52px);
                margin-bottom: 18px;
                line-height: 1.2;
            }

            h1 span {
                color: #67e8f9;
            }

            h2 {
                font-size: 23px;
                font-weight: 400;
                margin-bottom: 20px;
            }

            p {
                color: #e0e7ff;
                font-size: 16px;
                line-height: 1.8;
            }

            .status {
                display: inline-flex;
                align-items: center;
                gap: 9px;
                margin-top: 25px;
                padding: 10px 20px;
                border-radius: 30px;
                background: rgba(34,197,94,0.18);
                color: #bbf7d0;
            }

            .dot {
                width: 10px;
                height: 10px;
                background: #4ade80;
                border-radius: 50%;
                animation: pulse 1.5s infinite;
            }

            @keyframes pulse {
                50% {
                    box-shadow: 0 0 0 8px rgba(74,222,128,0.15);
                }
            }

            .button {
                display: inline-block;
                margin-top: 30px;
                padding: 14px 30px;
                color: #1e1b4b;
                background: #67e8f9;
                text-decoration: none;
                font-weight: bold;
                border-radius: 30px;
                transition: 0.3s;
            }

            .button:hover {
                transform: translateY(-5px);
                background: white;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            }

            .footer {
                margin-top: 35px;
                font-size: 13px;
                color: #c7d2fe;
            }

            @media (prefers-reduced-motion: reduce) {
                *, *::before, *::after {
                    animation: none !important;
                    transition: none !important;
                }
            }
        </style>
    </head>

    <body>
        <div class="circle one"></div>
        <div class="circle two"></div>

        <main class="container">
            <div class="tag">MY DEVOPS JOURNEY</div>

            <h1>Welcome to My <span>DevOps</span> Capstone!</h1>

            <h2>Node.js + Express Application</h2>

            <p>
                Building, Automating and Deploying Applications
                with modern DevOps tools.
            </p>

            <div class="status">
                <span class="dot"></span>
                Application Successfully Deployed
            </div>

            <br>

            <a href="/health" class="button">
                Check Application Health →
            </a>

            <div class="footer">
                Powered by Jenkins | Docker | AWS EC2
                <br><br>
                Automated CI/CD Pipeline
            </div>
        </main>
    </body>
    </html>
    `);
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        application: 'Node.js DevOps Capstone',
        message: 'Application is healthy'
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

