import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

// Import the global authentication manager
import { useAuth } from "../providers/AuthProvider";

import Header from "../components/auth/Header";
import AuthButton from "../components/auth/0authButton";

const LoggingScreen = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        logo={require("../../assets/images/logo.png")}
        heading="Login to your"
        headingText="swape mate account"
        backgroundImage={require("../../assets/images/blackbackground.png")}
      />

      <View style={styles.body}>
        <AuthButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  body: {
    paddingTop: 40,
    marginHorizontal: 20
  }
});

export default LoggingScreen;
