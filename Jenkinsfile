
pipeline {
    agent any

    tools {
        nodejs 'nodejs-24'
    }

    environment {
        APP_NAME = 'nodejs-devops-capstone'
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo 'Checking out source code from GitHub'
                checkout scm
            }
        }

        stage('Verify Node.js') {
            steps {
                echo 'Checking Node.js and npm versions'
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing application dependencies'
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running application tests'
                sh 'npm test'
            }
        }

        stage('Build Application') {
            steps {
                echo 'Validating Node.js application'
                sh 'node --check server.js'
            }
        }
    }

    post {
        success {
            echo 'Node.js CI Pipeline completed successfully!'
        }

        failure {
            echo 'Node.js CI Pipeline failed. Check the console output.'
        }

        always {
            echo 'Pipeline execution completed.'
        }
    }
}
