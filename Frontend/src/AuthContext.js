// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [authState, setAuthState] = useState({
//     isLoggedIn: false,
//     username: "", // Use username
//     role: null, // Track user role
//   });

//   const login = (username, role) => {
//     setAuthState({ isLoggedIn: true, username, role });
//   };

//   const logout = () => {
//     setAuthState({ isLoggedIn: false, username: "", role: null });
//   };

//   const updateAuthState = (newState) => {
//     setAuthState((prevState) => ({ ...prevState, ...newState }));
//   };

//   return (
//     <AuthContext.Provider value={{ authState, login, logout, updateAuthState }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);
// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//     const [authState, setAuthState] = useState({
//         isLoggedIn: false,
//         firstName: "",
//     });

//     const login = (firstName) => {
//         setAuthState({ isLoggedIn: true, firstName });
//     };

//     const logout = () => {
//         setAuthState({ isLoggedIn: false, firstName: "" });
//     };

//     const updateAuthState = (newState) => {
//         setAuthState((prevState) => ({ ...prevState, ...newState }));
//     };

//     return (
//         <AuthContext.Provider value={{ authState, login, logout, updateAuthState }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export const useAuth = () => useContext(AuthContext);