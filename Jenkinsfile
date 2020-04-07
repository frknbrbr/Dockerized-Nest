pipeline {
    agent any
    stages {
        stage('Build image') {
            steps {
                echo 'Starting to build docker image s'

                //sh
                //poll scm
                //sh 'SHA=$(git rev-parse HEAD) && docker build -t frknbrbr/dockerized-nest:$SHA .'
                //sh 'docker build -t frknbrbr/dockerizedd-nest:$(git rev-parse origin/master) .'
                sh 'docker build -t frknbrbr/dockerized-nest:${env.GIT_COMMIT}' 
            }
        }
    }
}