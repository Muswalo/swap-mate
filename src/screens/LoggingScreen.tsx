import React from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "../providers/AuthProvider";

const LoggingScreen = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const handleChange = () => {
    setIsAuthenticated(!isAuthenticated);
  };
  return (
    <View>
      <Text>Awesome LoggingScreen</Text>
      <Button title="press me" onPress={handleChange} />
    </View>
  );
};

export default LoggingScreen;
