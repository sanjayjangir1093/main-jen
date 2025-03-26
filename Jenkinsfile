pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    echo "Cloning repository..."
                    git branch: 'main', url: "https://github.com/sanjayjangir1093/main-jen.git"
                }
            }
        }

        stage('Install Node.js') {
            steps {
                script {
                    echo "Installing Node.js..."
                    // Use sudo for commands that require elevated privileges
                    sh '''
                    sudo curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
                    sudo apt update -y
                    sudo apt install -y nodejs
                    '''
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo "Installing project dependencies..."
                    sh 'npm install'
                    
                    // Install Vite if not already in package.json
                    sh '''
                    if ! npm list vite > /dev/null 2>&1; then
                        echo "Installing Vite as a development dependency..."
                        npm install vite --save-dev
                    fi
                    '''
                }
            }
        }

        stage('Build Project') {
            steps {
                script {
                    echo "Building the project..."
                    sh 'npm run build'
                }
            }
        }

        stage('Set Permissions') {
            steps {
                script {
                    echo "Setting permissions for Vite binary..."
                    sh 'chmod +x node_modules/.bin/vite'
                }
            }
        }

        stage('Install and Configure NGINX') {
            steps {
                script {
                    echo "Installing and configuring NGINX..."
                    sh 'sudo systemctl enable nginx'
                    sh 'sudo systemctl start nginx'
                    
                    echo "Configuring NGINX..."
                    sh 'sudo nginx -t'
                    sh 'sudo systemctl restart nginx'
                }
            }
        }

        stage('Adjust Firewall Rules') {
            steps {
                script {
                    echo "Adjusting firewall rules for NGINX..."
                    sh 'yes | sudo ufw enable'
                    sh 'sudo ufw allow "Nginx Full"'
                    sh 'sudo ufw reload'
                }
            }
        }

        stage('Set Permissions for Build Output') {
            steps {
                script {
                    echo "Setting proper permissions for the dist folder..."
                    sh 'sudo chown -R www-data:www-data /home/ubuntu/ATE-web/dist'
                    sh 'sudo chmod -R 755 /home/ubuntu/ATE-web/dist'
                }
            }
        }
    }

    post {
        success {
            echo "Deployment completed successfully."
        }
        failure {
            echo "Deployment failed."
        }
    }
}
