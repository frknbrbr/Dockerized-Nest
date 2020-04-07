pipeline {
    agent any

    environment {
      registry = "frknbrbr/dockerized-nest"
      //registryCredential = "dockerhub"
      DOCKERHUB_CREDS = credentials('dockerhub')
    }

    stages {
        stage('Build image') {
            steps {
                echo 'Starting to build docker image'

                //sh
                //poll scm
                //sh 'SHA=$(git rev-parse HEAD) && docker build -t frknbrbr/dockerized-nest:$SHA .'
                //sh 'docker build -t frknbrbr/dockerizedd-nest:$(git rev-parse origin/master) .'
                sh "docker build -t ${env.registry}:${env.GIT_COMMIT} ."
            }
        }

        stage('Deliver image') {
            steps {
                echo 'Starting to push image to the dockerhub'
                sh "docker login -u=${env.DOCKERHUB_CREDS_USR} -p=${env.DOCKERHUB_CREDS_PSW}"
                sh "docker push ${env.registry}:${env.GIT_COMMIT}"
            }
        }        
    }
}