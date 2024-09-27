import { createContext, useEffect, useState } from "react";
import Spinner from "../pages/loading";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    userInfo: {},
  });
  const [Loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
    if (user) {
      console.log("user=>", user);
      const uid = user.uid;
      console.log("User Id", uid);
      setUser({ isLogin: true, ...user.userInfo });
    } else {
      // User is signed out
      // ...
      setUser({ isLogin: false, userInfo: {} });

      console.log("User SignOut");
    }
    setLoading(false);
  });

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {Loading ? <Spinner /> : { children }}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
