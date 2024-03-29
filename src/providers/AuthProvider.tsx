import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Auth from "../utils/AuthUtils";

/**
 * Interface representing the authentication context.
 * @interface
 * @property {boolean} isAuthenticated - Indicates whether the user is authenticated.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setIsAuthenticated - Function to set the authentication state.
 * @property {string | null} error - Any error that occurred during authentication.
 * @property {React.Dispatch<React.SetStateAction<string | null>>} setError - Function to set the error state.
 * @property {() => Promise<void>} logout - Function to log out the user.
 */
interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  logout: () => Promise<void>;
}

// Create the authentication context with default values
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  error: null,
  setError: () => {},
  logout: async () => {},
});

/**
 * Authentication provider component.
 * @component
 * @param {ReactNode} children - The child components.
 * @returns {JSX.Element} The rendered JSX element.
 */
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Logs out the user.
   * @async
   */
  const logout = async () => {
    try {
      await Auth.clearAuthToken();
      setIsAuthenticated(false);
      setError(null);
    } catch (error: any) {
      setError("Error logging out: " + error.message);
    }
  };

  useEffect(() => {
    // On component mount, check if user is already authenticated
    const checkAuthentication = async () => {
      try {
        const isAuthenticated = await Auth.isAuthenticated();
        setIsAuthenticated(isAuthenticated);
      } catch (error: any) {
        setError("Error checking authentication status: " + error.message);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, error, setError, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to use the authentication context.
 * @returns {AuthContextType} The authentication context.
 */
export const useAuth = () => useContext(AuthContext);
