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
                    sh 'tag = $$(git log -1 --pretty=%!H(MISSING))'
                    sh 'docker build -t dockerizedd-nest${tag} .'
                }
            }
        }
    }
}