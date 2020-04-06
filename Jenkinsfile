pipeline {
    agent any
    stages {
        stage('Build image') {
            steps {
                echo 'Starting to build docker image s'

                //sh

                //poll scm
                
                sh 'SHA=$(git rev-parse HEAD)'
                sh 'docker build -t frknbrbr/dockerized-nest:$SHA .'
              
            }
        }
    }
}