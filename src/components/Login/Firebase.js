import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeFirebase = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleGoogleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      const { displayName, photoURL, email } = res.user;
      const signedInUser = {
        name: displayName,
        email: email,
        photo: photoURL,
        selectedService: {
          name: "",
        },
      };

      return signedInUser;
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log("error", errorMessage);
      console.log(error);
    });
};
