import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
const initAuth = () => {
  initializeApp(firebaseConfig);
};
export default initAuth;
/* 
 for authantication
-----------------------------------
Steps-1: init setup
1. firebase: create project.
2. create web app
3. get configaration 
4. init firebase
5. Enable auth method

-----------------------------------
Steps-2 
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

*/
