// 'use client'

// import React, { createContext, useState, useCallback, useMemo, ReactNode, useEffect } from 'react';
// import { auth } from '../modules/services/auth/authGoogle.service';
// import { IUser } from '../modules/models/entities/user.entity';
// import { UserController } from '../modules/controllers/user.controller';
// import { useSession, getSession } from 'next-auth/react';

// interface UserContextType {
//   currentUser: IUser;
//   getUser: () => void;
// }

// async function getUserSession () {
//     const userSession = await auth();
//     return await userSession;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

//   const { data: session, status } = useSession();

//   const [currentUser, setCurrentUser] = useState<any>(null);

//   const getUser = useCallback(async () => {

//     console.log('oi')

//     if (!session?.user?.id) {
//         return;
//     }

//     try {
//         const userData: IUser = await UserController.findByGoogleId(session?.user.id);
//         setCurrentUser(userData);

//     } catch (error) {
//         setCurrentUser('batata');
//     }

//   }, []);

//   useEffect(() => {
//     getUser();
//   }, [status]);

//   const contextValue = useMemo(() => ({
//     currentUser,
//     getUser
//   }), [currentUser, getUser]);

//   return (
//     <UserContext.Provider value={contextValue}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export { UserProvider, UserContext };
