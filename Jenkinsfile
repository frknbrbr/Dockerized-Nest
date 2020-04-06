pipeline {
    agent any
    stages {
        stage('Build image') {
            steps {
                echo 'Starting to build docker image s'

                //sh

                //poll scm
                
                //sha
                script {
                    //def customImage = docker.build("dockerized-nest")
                    //customImage.push()
                    sh 'SHA=$(git rev-parse HEAD)'
                    sh 'docker build -t frknbrbr/dockerized-nest:$SHA .'
                }
            }
        }
    }
}