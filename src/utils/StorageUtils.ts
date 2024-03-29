import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Interface representing a storage object with methods for AsyncStorage operations.
 */
interface Storage {
  /**
   * Store a value in AsyncStorage.
   * @param key The key under which to store the value.
   * @param value The value to store.
   * @returns A Promise that resolves when the data is stored successfully.
   * @throws An error if storing data fails.
   */
  storeData: (key: string, value: any) => Promise<void>;

  /**
   * Retrieve a value from AsyncStorage.
   * @param key The key of the value to retrieve.
   * @returns A Promise that resolves with the retrieved value, or null if the key doesn't exist.
   * @throws An error if reading data fails.
   */
  getData: <T>(key: string) => Promise<T | null>;

  /**
   * Remove a value from AsyncStorage.
   * @param key The key of the value to remove.
   * @returns A Promise that resolves when the value is removed successfully.
   * @throws An error if removing data fails.
   */
  removeData: (key: string) => Promise<void>;

  /**
   * Clear all data from AsyncStorage.
   * @returns A Promise that resolves when all data is cleared successfully.
   * @throws An error if clearing data fails.
   */
  clearAllData: () => Promise<void>;
}

/**
 * Object implementing the Storage interface for AsyncStorage operations.
 */
const Storage: Storage = {
  /**
   * Store a value in AsyncStorage.
   * @param key The key under which to store the value.
   * @param value The value to store.
   * @returns A Promise that resolves when the data is stored successfully.
   * @throws An error if storing data fails.
   */
  storeData: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error: any) {
      throw new Error(`Error storing data for key '${key}': ${error.message}`);
    }
  },

  /**
   * Retrieve a value from AsyncStorage.
   * @param key The key of the value to retrieve.
   * @returns A Promise that resolves with the retrieved value, or null if the key doesn't exist.
   * @throws An error if reading data fails.
   */
  getData: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null ? JSON.parse(value) : null;
    } catch (error: any) {
      throw new Error(`Error reading data for key '${key}': ${error.message}`);
    }
  },

  /**
   * Remove a value from AsyncStorage.
   * @param key The key of the value to remove.
   * @returns A Promise that resolves when the value is removed successfully.
   * @throws An error if removing data fails.
   */
  removeData: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error: any) {
      throw new Error(`Error removing data for key '${key}': ${error.message}`);
    }
  },

  /**
   * Clear all data from AsyncStorage.
   * @returns A Promise that resolves when all data is cleared successfully.
   * @throws An error if clearing data fails.
   */
  clearAllData: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error: any) {
      throw new Error(`Error clearing all data: ${error.message}`);
    }
  },
};

export default Storage;
