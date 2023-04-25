import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyApRqrFhQJzlRVyFoHDxc_fIcB4w_tFPY0",
  authDomain: "netflix-clone-8ba10.firebaseapp.com",
  projectId: "netflix-clone-8ba10",
  storageBucket: "netflix-clone-8ba10.appspot.com",
  messagingSenderId: "232995304850",
  appId: "1:232995304850:web:b2fd0482e1f91115d13d4b"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export {app, auth, db};