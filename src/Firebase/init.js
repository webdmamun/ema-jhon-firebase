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
Steps-2: setUp component
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register
-----------------------------------
Steps-3: set up auth system
1. set up sign in method 
2. set up sign out method 
3. user stater
4. useFirebase
5. Specail obserber
6. return necessary methods and states from useFirebase
-----------------------------------
Steps-4: create auth context hook (useAuth)
1. Create a Auth Context
2. create context auth provider
3. set Context all value
4.  use auth provider
5. create useAuth hook
-----------------------------------
Steps-5: creat private route
1. create private route
2. set private route
*/
