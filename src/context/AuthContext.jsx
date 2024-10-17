import { createContext, useEffect, useState } from "react";
import Spinner from "../components/loading";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    userInfo: {},
  });
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("user=>", user);
        const uid = user.uid;
        // console.log("User Id", uid);
        setUser({
          isLogin: true,
          userInfo: {
            name: user?.displayName,
            UserPhoto: user?.photoURL,
            userEmail: user?.email,
          },
        });
      } else {
        // User is signed out
        // ...
        setUser({ isLogin: false, userInfo: {} });

        // console.log("User SignOut");
      }
      setLoading(false);
    });
    
  }, []);

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {Loading ? <Spinner /> : children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
