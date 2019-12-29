# react-native-mongodb-mobile-app


A react-native app </br>
&nbsp;frontend: redux, axios </br>
&nbsp;backend: express, mongoose, mongoDB-atlas </br>

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

  open two terminals, one in my-app dir, one in backend dir: </br>
    in backend dir: </br>
      nodemon server </br>
    in my-app dir: </br>
      npm start (or expo start) </br>

---

Trouble Shooting </br>
  prerequisite: </br>
    nodejs installed </br>
    expo cli installed </br>
  to install packages: </br>
    cd my-app </br>
      npm install react-native </br>
      expo install react-native-gesture-handler react-native-reanimated </br>
      npm install react-navigation </br>
      npm install react-navigation-stack react-navigation-tabs </br>
      npm install redux react-redux </br>
      npm install --save-dev redux-devtools </br>
      npm install axios </br>
    cd my-app/backend </br>
      npm init -y </br>
      npm install mongoose express cors dotenv </br>
      npm install nodemon </br>

  to recompile the project, delete 'node_module' folder and type: 'npm install' in project </br>

---

Lisence: MIT </br>
