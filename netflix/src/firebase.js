import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBNzGTvfpt-lyG27wTvUG1f2Zk2n0b-BMk",
  authDomain: "netflix-clone-65672.firebaseapp.com",
  projectId: "netflix-clone-65672",
  storageBucket: "netflix-clone-65672.appspot.com",
  messagingSenderId: "20673411844",
  appId: "1:20673411844:web:b9a07c59e33dd55fd22e51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    
    toast.success("User signed up and added to Firestore:", user.uid);


  } catch (error) {
    console.error("Error during signup:", error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully");
    
    toast.success("User logged in successfully")
  } catch (error) {
    console.error("Error during login:", error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
    
    toast.success("User logged out successfully")
  } catch (error) {
    console.error("Error during logout:", error);
    
    
  }
};

export { auth, db, login, signup, logout };
