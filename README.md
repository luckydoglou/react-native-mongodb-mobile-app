# react-native-mongodb-mobile-app

A react-native app
  frontend: redux, axios
  backend: express, mongoose, mongoDB-atlas

---

To Run:
  you need link your mongodb Atlas cluster to this app:
    get the connection link of your cluster
    paste it in /my-app/backend/.env after the variable name
    make sure type in your password

  cd my-app
  npm install
  cd backend
  npm install

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