// import React from 'react'
// import { createContext, useState, useContext, ReactNode } from 'react';
// import { UserDto } from '../modules/models/dto/user.dto';


// interface UserContextProps {
//     user: UserDto | undefined;
//     setUser: (user: UserDto) => void;
// }

// const UserContext = React.createContext<UserContextProps | undefined>(undefined);

// export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [user, setUser] = useState<UserDto | undefined>(undefined);

//     return (
//       <UserContext.Provider value={{ user, setUser }}>
//         {children}
//       </UserContext.Provider>
//     );
// };

// export const useUserProvider = () => {
//   const context = useContext(UserContext);
//   if(!context) {
//     throw new Error('Context undefined')
//   }
//   return context;
// };
