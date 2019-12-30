# react-native-mongodb-mobile-app


Currently implemented login and signup screens </br>
&nbsp;&nbsp;frontend: redux, axios </br>
&nbsp;&nbsp;backend: express, mongoose, mongoDB-atlas </br>

---

## To Run:
you need link your mongodb Atlas cluster to this app: </br>
&nbsp;&nbsp;get the connection link of your cluster </br>
&nbsp;&nbsp;paste it in /my-app/backend/.env after the variable name </br>
&nbsp;&nbsp;make sure type in your password </br>

```
  cd my-app
  npm install
  cd backend
  npm install
```

open two terminals, one in my-app dir, one in backend dir: </br>
&nbsp;&nbsp;in backend dir: nodemon server </br>
&nbsp;&nbsp;in my-app dir: npm start (or expo start) </br>

---

## Trouble Shooting
prerequisites: </br>
&nbsp;&nbsp;nodejs installed </br>
&nbsp;&nbsp;expo cli installed </br>
&nbsp;&nbsp;to install packages:
```
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
```
&nbsp;&nbsp;to recompile the project, delete 'node_module' folder and type: 'npm install' in project </br>

---

## Lisence

MIT
