import React from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "../providers/AuthProvider";

const AppNavigation = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const handleChange = () => {
    setIsAuthenticated(!isAuthenticated);
  };
  return (
    <View>
      <Text>Awesome Navigation Screen</Text>
      <Button title="press me" onPress={handleChange} />
    </View>
  );
};

export default AppNavigation;
