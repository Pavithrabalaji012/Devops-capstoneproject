
pipeline {
    agent any

    tools {
        nodejs 'nodejs-24'
    }

    environment {
        APP_NAME = 'nodejs-devops-capstone'
        DOCKER_IMAGE = 'pavithradhrithi/devops-capstone-project'
        DOCKERHUB_CREDENTIALS = 'Dockerhub-token'
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
        stage('Docker Build') {
            steps {
                sh '''
                    docker build -t $DOCKER_IMAGE:latest .
                '''
            }
        }

        stage('Show Docker Images') {
            steps {
                sh 'docker images'
            }
        }

        stage('Docker Login and Push') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: DOCKERHUB_CREDENTIALS,
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login \
                            -u "$DOCKER_USER" --password-stdin

                        docker push $DOCKER_IMAGE:latest

                        docker logout
                    '''
                }
            }
        }
        stage('Pull Docker Image') {
            steps {
                sh '''
                    docker pull $DOCKER_IMAGE:latest
                '''
            }
        }

        stage('Deploy Docker Container') {
            steps {
                sh '''
                    docker rm -f nodejs-app || true

                    docker run -d \
                        --restart unless-stopped \
                        -p 80:3000 \
                        --name nodejs-app \
                        $DOCKER_IMAGE:latest

                    docker ps
                '''
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
