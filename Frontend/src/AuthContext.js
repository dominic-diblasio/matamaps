// import React, { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [authState, setAuthState] = useState({ isLoggedIn: false, username: "", role: null });

//   useEffect(() => {
//     const jwtToken = localStorage.getItem('jwt_token');
//     if (jwtToken) {
//       fetch(`http://localhost:3500/users/account/details`, {
//         headers: { Authorization: `Bearer ${jwtToken}` }
//       })
//       .then(response => response.json())
//       .then(result => {
//         if (result.success) {
//           setAuthState({ 
//             isLoggedIn: true, 
//             username: result.data.username, 
//             role: result.data.role 
//           });
//         }
//       });
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ authState, setAuthState }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);
