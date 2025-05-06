/** @format */

import { FC, ReactNode, createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

type Props = {
  children: ReactNode;
};

interface ContextProps {
  role: string | null;
}

const RoleContext = createContext<ContextProps>({
  role: null,
});

const RoleProvider: FC<Props> = ({ children }) => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const userRole = Cookies.get("role");
    setRole(userRole || null);

    return () => {
      setRole(null); // Reset role when unmounting component
    };
  }, []);

  const contextValue: ContextProps = {
    role,
  };

  return (
    <RoleContext.Provider value={contextValue}>{children}</RoleContext.Provider>
  );
};

export default RoleProvider;
export { RoleContext };
