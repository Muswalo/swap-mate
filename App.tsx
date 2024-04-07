import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

// Authentication Provider Modules
import { AuthProvider, useAuth } from "./src/providers/AuthProvider";

// Navigation Dependencies
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screen Components
import AppNavigation from "./src/navigation/AppNavigation";
import LoggingScreen from "./src/screens/LoggingScreen";
import SignupScreen from "./src/screens/SignupScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";

// Style Provider for global styles
import { StylesProvider } from "./src/styles/StylesContext";

const Stack = createNativeStackNavigator();

const App = () => {
  const [initialising, setInitialising] = useState<boolean>(true);
  const [user, setUser] = useState<boolean | null>(null);
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const onAuthChange = (isAuthenticated: boolean) => {
    setUser(isAuthenticated);
  };

  useEffect(() => {
    onAuthChange(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <StylesProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <Stack.Screen name="AppNavigator" component={AppNavigation} />
          ) : (
            <React.Fragment>
              <Stack.Screen name="Loggin" component={LoggingScreen} />
              <Stack.Screen name="Sigup" component={SignupScreen} />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
              />
            </React.Fragment>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </StylesProvider>
  );
};

// Define a wrapper component for the App that includes the AuthProvider
const AppWrapper = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default AppWrapper;
