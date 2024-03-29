import Storage from "./StorageUtils";
/**
 * Interface representing the AuthManager object with methods for authentication and token management.
 */
interface Authentication {
  /**
   * Store user authentication token.
   * @param token The authentication token to store.
   * @returns A Promise that resolves when the token is stored successfully.
   * @throws An error if storing the token fails.
   */
  setAuthToken: (token: string) => Promise<void>;

  /**
   * Retrieve user authentication token.
   * @returns A Promise that resolves with the authentication token, or null if not found.
   * @throws An error if retrieving the token fails.
   */
  getAuthToken: () => Promise<string | null>;

  /**
   * Check if a user is authenticated.
   * @returns A Promise that resolves with a boolean indicating authentication status.
   * @throws An error if checking authentication status fails.
   */
  isAuthenticated: () => Promise<boolean>;

  /**
   * Clear user authentication token (logout).
   * @returns A Promise that resolves when the token is cleared successfully.
   * @throws An error if clearing the token fails.
   */
  clearAuthToken: () => Promise<void>;

  /**
   * Set the service token.
   * @param token The service token to store.
   * @returns A Promise that resolves when the token is stored successfully.
   * @throws An error if storing the token fails.
   */
  setServiceToken: (token: string) => Promise<void>;

  /**
   * Refresh service token from the specified endpoint and store it.
   * @param refreshTokenEndpoint The endpoint URL for token refresh.
   * @returns A Promise that resolves when the token is refreshed and stored successfully.
   * @throws An error if refreshing or storing the token fails.
   */
  refreshAndStoreServiceToken: (refreshTokenEndpoint: string) => Promise<void>;

  /**
   * Check if a service token is available.
   * @returns A Promise that resolves with a boolean indicating service token availability.
   * @throws An error if checking service token availability fails.
   */
  isServiceTokenAvailable: () => Promise<boolean>;

  /**
   * Retrieve the service token.
   * @returns A Promise that resolves with the service token, or null if not found.
   * @throws An error if retrieving the token fails.
   */
  getServiceToken: () => Promise<string | null>;
}

const Auth: Authentication = {
  setAuthToken: async (token) => {
    try {
      await Storage.storeData("authToken", token);
    } catch (error: any) {
      throw new Error("Error setting authentication token: " + error.message);
    }
  },

  getAuthToken: async () => {
    try {
      const token = await Storage.getData("authToken");
      return token as string | null;
    } catch (error: any) {
      throw new Error("Error getting authentication token: " + error.message);
    }
  },

  isAuthenticated: async () => {
    try {
      const token = await Auth.getAuthToken();
      return !!token;
    } catch (error: any) {
      throw new Error("Error checking authentication status: " + error.message);
    }
  },

  clearAuthToken: async () => {
    try {
      await Storage.removeData("authToken");
    } catch (error: any) {
      throw new Error("Error clearing authentication token: " + error.message);
    }
  },

  setServiceToken: async (token) => {
    try {
      await Storage.storeData("serviceToken", token);
    } catch (error: any) {
      throw new Error("Error storing service token: " + error.message);
    }
  },

  refreshAndStoreServiceToken: async (refreshTokenEndpoint) => {
    try {
      const response = await fetch(refreshTokenEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error refreshing service token");
      }

      const responseData = await response.json();
      const serviceToken = responseData.serviceToken;

      if (serviceToken) {
        await Auth.setServiceToken(serviceToken);
      }
    } catch (error: any) {
      throw new Error(
        "Error refreshing and storing service token: " + error.message
      );
    }
  },

  isServiceTokenAvailable: async () => {
    try {
      const token = await Auth.getServiceToken();
      return !!token;
    } catch (error: any) {
      throw new Error(
        "Error checking service token availability: " + error.message
      );
    }
  },

  getServiceToken: async () => {
    try {
      const token = await Storage.getData("serviceToken");
      return token as string | null;
    } catch (error: any) {
      throw new Error("Error getting service token: " + error.message);
    }
  },
};

export default Auth;
