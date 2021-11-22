import firebase from "firebase/compat";
import { toast } from "react-toastify";
import { app } from "./config";
import User = firebase.User;

const auth = app.auth();
const db = app.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(provider);
    if (res.user != null) {
      const user: User = res.user;
      const query = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
      if (query.docs.length === 0) {
        await db.collection("users").add({
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
      toast.success(`Welcome ${user.displayName}`);
    } else {
      toast.error("cannot sign in at the moment try again");
    }
  } catch (err: any) {
    console.error(err);
    toast.error(err.message);
  }
};

const signInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err: any) {
    console.error(err);
    toast.error(err.message);
  }
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    if (res.user != null) {
      const user: User = res.user;
      await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "email",
        email,
      });
      toast.success(`Welcome ${name}`);
    } else {
      toast.error("cannot create an account at the moment try again");
    }
  } catch (err: any) {
    console.error(err);
    toast.error(err.message);
  }
};

const sendPasswordResetEmail = async (email: string) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("A link has been sent to you email");
  } catch (err: any) {
    console.error(err);
    toast.error(err.message);
  }
};

const logout = () => {
  auth.signOut().then((r) => {
    toast.success("You have signed out");
  });
};

export {
  logout,
  signInWithGoogle,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
};
