//to start jenkins run a command: java -jar jenkins.war -httpPort=8080 --enable-future-java

or add in package.json in script section     "start-jenkins-server": "java -jar jenkins.war -httpPort=8080 --enable-future-java"  and run in command line

npm run start-jenkins-server 