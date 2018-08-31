# Chatbot Example

![front-end](https://user-images.githubusercontent.com/7755088/41134647-d6f78b62-6aa3-11e8-86a9-793528a2e037.png)

Web application that integrates with the chatbot built in the Watson Assistant introductory tutorial available at: https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/Watson%20101%20-%20Tutorials%20and%20quick-start%20code%20that%20work

## Back-end

In order to communicate with Watson Assistant, we developed a simple back-end that receives our messages from the front end and redirects them to the service.

To run the server you will have to install Node.js (version 8.11.4 or greater recommended), you can download it for your specific operating system at https://nodejs.org/en/.

In order to run this application: 

- Open the file server.js and populate the variables `workspaceID`, `username` and `password` with your credentials (You can check my Watson Assistant guide to learn how to obtain them: [#06 - Gluing Both Parts](https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/Watson%20101%20-%20Tutorials%20and%20quick-start%20code%20that%20work/page/%2306%20-%20Gluing%20Both%20Parts))

- Open a terminal window (method varies by OS);

- Move into the folder you copied the project (`cd /path/to/project/folder`)

- Type `node server.js`

If everything goes according to plan, you should be able to open a browser window and type `http://localhost:8080` to access it.