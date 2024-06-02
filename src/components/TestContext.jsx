import React, { createContext, useState } from 'react';

export const TestContext = createContext();

export const TestProvider = ({ children }) => {

    const [test, setTest] = useState({ valeur: 0, string: "" });
    const [user,setUser] = useState({nom:"",age:0});

    return (
        <TestContext.Provider value={{ test, setTest, user, setUser }}>
            {children}
        </TestContext.Provider>
    );
};
