pipeline {
    agent any
    
    stages {

        stage('Test') {
            steps {
                sh 'npm install' // Assurez-vous que toutes les dépendances sont installées
                sh 'npx jest' // Exécutez la commande de test Jest
            }
        }
        
    }


    post { // Define the post-build actions
        
        success { // Execute this block if the build is successful
            mail to: 'jc.fontaine34@gmail.com', // Send an email to the specified recipients
            subject: "Déploiement réussi", // Set the email subject
            body: "Nouvelle version de l'application déployée en production" // Set the email body
        }
        failure { // Execute this block if the build fails
            mail to: 'jc.fontaine34@gmail.com', // Send an email to the specified recipients
            subject: "Echec du déploiement", // Set the email subject
            body: "Le déploiement a échoué. Veuillez vérifier les logs de jenkins pour plus de détails." // Set the email body
        }
    }
}