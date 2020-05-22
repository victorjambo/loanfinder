import auth from '@react-native-firebase/auth';

class Auth {
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
