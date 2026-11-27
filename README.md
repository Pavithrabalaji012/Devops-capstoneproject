# Node.js DevOps Capstone Project

## 1. Project Description

This project demonstrates an end-to-end DevOps CI/CD pipeline for a Node.js web application using Jenkins, Docker, GitHub, and AWS EC2.

The pipeline automates source code checkout, dependency installation, testing, Docker image creation, pushing the image to Docker Hub, and application deployment on an AWS EC2 instance.

Prometheus and Grafana are used for infrastructure and container monitoring. Bash scripts and Cron jobs automate backup and log cleanup tasks.

## 2. Technology Stack

- **Application:** Node.js, Express.js
- **Version Control:** Git, GitHub
- **CI/CD:** Jenkins, GitHub Webhook
- **Containerization:** Docker, Docker Hub
- **Cloud Infrastructure:** AWS EC2
- **Monitoring:** Prometheus, Grafana, Node Exporter, cAdvisor
- **Automation:** Bash Scripting, Cron
- **Testing:** Node.js test framework, Supertest

## 3. Application Endpoints

- `/` – Application homepage
- `/health` – Application health check endpoint

## 4. Prerequisites

Install the following tools before running the application locally:

- Node.js and npm
- Git
- Docker (optional, for containerized execution)

## 5. Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/Pavithrabalaji012/Devops-capstoneproject.git
cd Devops-capstoneproject
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run the Application Locally

```bash
node server.js
```

Open your browser and visit:

```text
http://localhost:3000
```

Health check:

```text
http://localhost:3000/health
```

### Step 4: Build the Docker Image

```bash
docker build -t pavithradhrithi/devops-capstone-project:latest .
```

### Step 5: Run the Docker Container

```bash
docker run -d --restart unless-stopped -p 80:3000 --name nodejs-app pavithradhrithi/devops-capstone-project:latest

docker ps ###for checking if the container is running
```

Access the application at:

```text
http://localhost:3000
```

## 6. CI/CD Pipeline Flow

The project uses Jenkins to automate the application build and deployment process.

1. Developer makes changes to the application code.
2. Changes are committed and pushed to the GitHub repository.
3. GitHub Webhook automatically triggers the Jenkins pipeline.
4. Jenkins checks out the latest source code.
5. Jenkins installs application dependencies using `npm ci`.
6. Automated tests are executed.
7. Jenkins builds the Docker image.
8. The Docker image is pushed to Docker Hub.
9. The application server pulls the latest Docker image.
10. The old container is stopped and the updated application container is deployed.

## 7. Monitoring

Prometheus collects infrastructure and container metrics.

- **Node Exporter:** Monitors EC2 CPU, memory, disk, and network usage.
- **cAdvisor:** Collects Docker container resource metrics.
- **Grafana:** Displays monitoring dashboards and alert rules.

## 8. Automation Using Bash and Cron

Two Bash scripts are configured for scheduled automation:

- **Backup Script:** Creates compressed backups of the Jenkins project workspace.
- **Log Cleanup Script:** Removes `.log` files older than seven days from the configured log directory.

Cron jobs execute these scripts automatically at scheduled times.

## 9. Project Outcome

Successfully implemented an end-to-end CI/CD pipeline for a Node.js application with automated testing, Docker image creation, deployment, monitoring, and scheduled backup and log cleanup tasks.
