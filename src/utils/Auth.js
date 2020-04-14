import auth, {firebase} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

class Auth {
  constructor() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '63604553901-goh9urt9jluqojvu64486tf1trvr1jue.apps.googleusercontent.com',
    });
  }

  fbGoogleAuth = async () => {
    const {accessToken, idToken} = await GoogleSignin.signIn();
    const credential = firebase.auth.GoogleAuthProvider.credential(
      idToken,
      accessToken,
    );
    await firebase.auth().signInWithCredential(credential);
  };

  // returns null if no current user
  firebaseCurrentUser = async () => await auth().currentUser;

  firebaseSettings = async () => await auth().settings;

  // returns null if signout success
  firebaseSignOut = async () => {
    return await auth().signOut();
  };

  firebaseLogin = async (email, password) => {
    return await auth().signInWithEmailAndPassword(email, password);
  };

  firebaseRegister = async (email, password) => {
    return await auth().createUserWithEmailAndPassword(email, password);
  };
}

export default new Auth();
