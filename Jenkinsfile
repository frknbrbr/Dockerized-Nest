pipeline {
    agent any
    stages {
        stage('Build image') {
            steps {
                echo 'Starting to build docker image s'

                //sh

                //poll scm
                //sh 'SHA=$(git rev-parse HEAD) && docker build -t frknbrbr/dockerized-nest:$SHA .'
                'docker build -t frknbrbr/dockerized-nest:$(git rev-parse HEAD) .'
              
            }
        }
    }
}