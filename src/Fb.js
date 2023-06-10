import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey:"",
    authDomain:"rjbaot3h.firebaseapp.com",
    projectId:"rjbaot3h"
});
export default firebase.firestore();