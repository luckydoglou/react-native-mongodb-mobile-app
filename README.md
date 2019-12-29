# react-native-mongodb-mobile-app

A react-native app </br>
  frontend: redux, axios </br>
  backend: express, mongoose, mongoDB-atlas </br>

---

To Run: </br>
  you need link your mongodb Atlas cluster to this app: </br>
    get the connection link of your cluster </br>
    paste it in /my-app/backend/.env after the variable name </br>
    make sure type in your password </br>

  cd my-app </br>
  npm install </br>
  cd backend </br>
  npm install </br>

  open two terminals, one in my-app dir, one in backend dir:
    in backend dir:
      nodemon server
    in my-app dir:
      npm start (or expo start)

---

Trouble Shooting
  prerequisite:
    nodejs installed
    expo cli installed
  to install packages:
    cd my-app
      npm install react-native
      expo install react-native-gesture-handler react-native-reanimated
      npm install react-navigation
      npm install react-navigation-stack react-navigation-tabs
      npm install redux react-redux
      npm install --save-dev redux-devtools
      npm install axios
    cd my-app/backend
      npm init -y
      npm install mongoose express cors dotenv
      npm install nodemon

  to recompile the project, delete 'node_module' folder and type: 'npm install' in project

---

Lisence: MIT