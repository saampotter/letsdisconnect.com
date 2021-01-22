import { useContext, createContext } from 'react';

const apiContext = createContext();

const useApi = () => useContext(apiContext);

const ProvideApi = ({ children }) => {
  return <apiContext.Provider value={{}}>{children}</apiContext.Provider>;
};

export { useApi as default, ProvideApi };
