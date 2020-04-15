import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

const webClientId =
  '63604553901-goh9urt9jluqojvu64486tf1trvr1jue.apps.googleusercontent.com';

const webClientIdGC =
  '63604553901-rh490fjtt77rltctonoeplthp5pbt63j.apps.googleusercontent.com';
const webClientSecret = '900pU5SYP8GlMM74-fXi5jOq';
const key = 'AIzaSyCDHAjnGxE_N7DW6JXbbE9iMpm7jAGjwio';

class Auth {
  constructor() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId,
    });
  }

  fbGoogleAuth = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return await auth().signInWithCredential(googleCredential);
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

  firebaseRegister = async (email, password, displayName) => {
    return await auth().createUserWithEmailAndPassword(
      email,
      password,
      displayName,
    );
  };
}

export default new Auth();
