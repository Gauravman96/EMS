
// import axios from 'axios'
// import React, { createContext, useContext, useEffect, useState } from 'react';


// const userContext = createContext(null);

// const AuthContext = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false)

  

//   useEffect(() => {
//     const verifyUser = async () => {
//     try{
//       const token = localStorage.getItem('token')
//       if(token){
//       const response =await axios.get("http://localhost:3000/api/auth/verify",{

//         headers: {
//           "Authorization" : `Bearer ${token} `
//         }
//       }

//       )
//       if(response.data.success){
//         setUser(response.data.user);
//       }
//     } else {
//          setUser(null);
//          setLoading(false)
//     }

//     }catch (error) {
//       if(error.response && !error.response.data.error){
//         setUser(null)
//       }
      

//     }
//     finally {
//       setLoading(false)
//     }
//   }
//   verifyUser()
// }, []);

//   const login = (user) => {
//     setUser(user);
//     localStorage.setItem('token', user.token);
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('token');
//   };

//   return (
//     <userContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </userContext.Provider>
//   );
// };

// export const useAuth = () => useContext(userContext);
// export default AuthContext;

import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("http://localhost:3000/api/auth/verify", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.data.success) {
            setUser(response.data.user);
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Verification error:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("token", userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);

export default AuthProvider;
